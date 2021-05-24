const refs = {
days: document.querySelector('.value[data-value="days"]'),
hours: document.querySelector('.value[data-value="hours"]'),
mins: document.querySelector('.value[data-value="mins"]'),
secs: document.querySelector('.value[data-value="secs"]'),
timerShell: document.querySelector('.timer'),
};

class CountdownTimer {
  constructor({ onTick }) {
    this.selector = '#timer-1';
    this.targetDate = new Date('Jul 17, 2021');
    this.onTick = onTick;
  }

  intervalId = setInterval(() => {
    const currentDate = Date.now();
    const upTime = this.targetDate - currentDate;
    const time = getTimeComponents(upTime);
      this.onTick(time);
  }, 1000);

  
};
new CountdownTimer({
  onTick: updateClockShell
});
function updateClockShell({ days, hours, mins, secs }) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
    
    
}
function pad(value) {
    return String(value).padStart(2, "0");
}
function getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
}

  


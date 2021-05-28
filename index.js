

class CountdownTimer {
  constructor({selector,targetDate}) {
    this.targetDate = targetDate;
    this.selector = selector;
    this.days = document.querySelector(`${selector} .value[data-value="days"]`);
    this.hours= document.querySelector(`${selector} .value[data-value="hours"]`);
    this.minutes = document.querySelector(`${selector} .value[data-value="mins"]`);
    this.seconds = document.querySelector(`${selector} .value[data-value="secs"]`);

  }
  intervalId = setInterval(() => {
    const currentTime = Date.now();
    this.getTimeComponents(currentTime);
  }, 1000)
  
   pad(value) {
    return String(value).padStart(2, "0");
  }
  getTimeComponents(currentTime) {
    const time = this.targetDate - currentTime;
    this.days.textContent = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    this.hours.textContent = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    this.minutes.textContent = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    this.seconds.textContent = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    
  }
  
};

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

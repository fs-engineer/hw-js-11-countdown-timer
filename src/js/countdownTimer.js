'use strict';

export class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.differenceTime = null;
    this.targetDate = targetDate;
    console.log(targetDate);

    this.days = document.querySelector(`${selector} .value[data-value="days"]`);
    this.hours = document.querySelector(
      `${selector} .value[data-value="hours"]`,
    );
    this.mins = document.querySelector(`${selector} .value[data-value="mins"]`);
    this.secs = document.querySelector(`${selector} .value[data-value="secs"]`);
  }

  countTimeDay(ms) {
    this.days.textContent = parseInt(ms / 1000 / 3600 / 24);
    this.hours.textContent = this.pad(Math.floor((ms / 1000 / 3600) % 24));
    this.mins.textContent = this.pad(Math.floor((ms / 1000 / 60) % 60));
    this.secs.textContent = this.pad(Math.floor((ms / 1000) % 60));
  }

  startTimer() {
    this.intervalID = setInterval(() => {
      this.differenceTime = this.targetDate - Date.now();
      this.countTimeDay(this.differenceTime);
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.intervalID);
  }

  pad = function (value) {
    return String(value).padStart(2, 0);
  };
}

'use strict';

export class CountdownTimer {
  constructor(targetDate) {
    this.differenceTime = null;
    this.targetDate = this.convertDateToNumber(targetDate);
    this.days = document.querySelector('span[data-value="days"]');
    this.hours = document.querySelector('span[data-value="hours"]');
    this.mins = document.querySelector('span[data-value="mins"]');
    this.secs = document.querySelector('span[data-value="secs"]');
  }

  convertDateToNumber(date) {
    const dateObj = new Date(date);
    return Date.parse(dateObj);
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

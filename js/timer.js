class CountdownTimer {
  constructor(selector, targetDate) {
    // this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      days: document.querySelector(`${selector} [data-value="days"]`),
      hours: document.querySelector(`${selector} [data-value="hours"]`),
      mins: document.querySelector(`${selector} [data-value="mins"]`),
      secs: document.querySelector(`${selector} [data-value="secs"]`),
    };

    this.startTime();
  }

  startTime() {
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;

      this.updateClockFace(deltaTime);
    }, 1000);
  }

  updateClockFace(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.refs.days.textContent = `${days}`;
    this.refs.hours.textContent = `${hours}`;
    this.refs.mins.textContent = `${mins}`;
    this.refs.secs.textContent = `${secs}`;
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer1 = new CountdownTimer('#timer-1', new Date('Jul 01, 2022'));
const timer2 = new CountdownTimer('#timer-2', new Date('Jun 01, 2023'));

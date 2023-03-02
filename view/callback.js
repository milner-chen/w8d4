class Clock {
  constructor() {
    // 1. Create a Date object.
    const date = new Date();
    // const date = new Date('December 17, 1995 23:55:50');
    // 2. Store the hours, minutes, and seconds.
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    // 3. Call printTime.
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.
    setInterval(() => {
      this._tick();
    }, 1000);
  };

  printTime() {
    // Format the time in HH:MM:SS
    // let secondsSpaceHolder = ``
    // this.seconds < 10 ? secondsSpaceHolder = `0` : ``
    // let minutesSpaceHolder
    // this.minutes < 10 ? minutesSpaceHolder = `0` : ``
    // let hoursSpaceHolder
    // this.hours < 10 ? hoursSpaceHolder = `0` : ``

    let stringSeconds = this.seconds.toString();
    if (stringSeconds < 10) {
      stringSeconds = `0` + stringSeconds
    }
    let stringMinutes = this.minutes.toString();
    if (stringMinutes < 10) {
      stringMinutes = `0` + stringMinutes
    }
    let stringHours = this.hours.toString();
    if (stringHours < 10) {
      stringHours = `0` + stringHours
    }

    let string = `${stringHours}:${stringMinutes}:${stringSeconds}`;
    // let string = `${this.hours}:${this.minutes}:${this.seconds}`;
    // Use console.log to print it.
    console.log(string);
  }

  _tick() {
    // 1. Increment the time by one second.
    if (this.seconds === 59) {
      this.seconds = -1;
      ++this.minutes;
    }
    if (this.minutes === 60) {
      this.minutes = 0;
      ++this.hours;
    }
    if (this.hours === 24) {
      this.hours = 0;
    }
    
    ++this.seconds
    // 2. Call printTime.
    this.printTime();
  }
}

const clock = new Clock();

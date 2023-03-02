class Clock {
  constructor() {
    // 1. Create a Date object.
    // const date = new Date();
    const date = new Date('December 17, 1995 03:58:00');
    // 2. Store the hours, minutes, and seconds.
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    // 3. Call printTime.
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.
    setInterval(() => {
      this._tick();
    }, 50);
  };

  printTime() {
    // Format the time in HH:MM:SS
    let string = `${this.hours}:${this.minutes}:${this.seconds}`;
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
    if (this.hours === 23) {
      this.minutes = 0;
      ++this.hours;
    }
    
    ++this.seconds
    // 2. Call printTime.
    this.printTime();
  }
}

const clock = new Clock();

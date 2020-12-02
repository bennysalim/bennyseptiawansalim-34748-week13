import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bennysalim-week13';
  timeLeft: number = 60;
  hour: number = 0;
  minute: number = 0;
  second: number = 0;
  interval;
  timeData = 130;

  hourUp() {
    this.timeData = this.timeData + 3600;
  }
  hourDown() {
    this.timeData = this.timeData - 3600;
    if (this.timeData <= 0) {
      this.timeData = 0;
    }
  }
  minuteUp() {
    this.timeData = this.timeData + 60;
  }
  minuteDown() {
    this.timeData = this.timeData - 60;
    if (this.timeData <= 0) {
      this.timeData = 0;
    }
  }
  secondUp() {
    this.timeData = this.timeData + 1;
  }
  secondDown() {
    this.timeData = this.timeData - 1;
    if (this.timeData <= 0) {
      this.timeData = 0;
    }
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    }, 1000)
  }
  pauseTimer() {
    clearInterval(this.interval);
  }
}

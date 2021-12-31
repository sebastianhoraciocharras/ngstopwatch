import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngstopwwatch';
  time = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  timeTxt = '00:00:00';
  running = false;
  ticker: any;
  changeStopwatchState = () => {
    this.running = !this.running;
    if(this.running){
      this.ticker = setInterval(this.tick, 1000);
    } else {
      clearTimeout(this.ticker);
    }
  }
  stop = () => {
    this.running = false;
    clearTimeout(this.ticker);
    this.time = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.timeTxt = '00:00:00';
  }
  tick = () => {
    this.time++;
    this.calcDate();
    this.timeTxt = (this.hours < 10 ? '0' + this.hours.toString() : this.hours.toString()) + ':' + (this.minutes < 10 ? '0' + this.minutes.toString() : this.minutes.toString()) + ':' + (this.seconds < 10 ? '0' + this.seconds.toString() : this.seconds.toString());
  }
  calcDate = () => {
    this.hours = Math.floor(this.time / 3600);
    this.minutes = Math.floor((this.time - this.hours * 3600) / 60);
    this.seconds = Math.floor(this.time - this.hours * 3600 - this.minutes * 60);
  }
}

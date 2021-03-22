import { Component, OnInit } from '@angular/core';
import { Event } from './event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'calendar';

  currentYear: number;
  currentMonth: number;
  currentDate: number;
  firstMonthDay: Date;
  monthDays: number;

  selectedEvent: Event;

  private setGridData() {
    const nextMonthFirstDay = this.currentMonth === 12 ? new Date(this.currentYear + 1, 1, 1) : new Date(this.currentYear, this.currentMonth + 1, 1);
    const currMonthLastDay = new Date(nextMonthFirstDay.getTime() - 1);

    this.firstMonthDay = new Date(this.currentYear, this.currentMonth, 1);
    this.monthDays = currMonthLastDay.getDate();
  }

  ngOnInit() {
    const today = new Date();
    this.currentYear = today.getFullYear();
    this.currentMonth = today.getMonth();
    this.currentDate = today.getDate();
    this.setGridData();
  }

  switchToPrevMonth() {
    this.currentMonth = this.currentMonth === 0 ? 11 : this.currentMonth - 1;
    this.currentYear = this.currentMonth === 11 ? this.currentYear - 1 : this.currentYear;
    this.setGridData();
  }

  switchToNextMonth() {
    this.currentMonth = this.currentMonth === 11 ? 0 : this.currentMonth + 1;
    this.currentYear = this.currentMonth === 0 ? this.currentYear + 1 : this.currentYear;
    this.setGridData();
  }
}

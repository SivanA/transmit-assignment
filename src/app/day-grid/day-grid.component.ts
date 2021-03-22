import { Component, Input, OnChanges } from '@angular/core';
import { Day } from '../day';
import { Event } from '../event';

import { AddEventComponent } from '../add-event/add-event.component';
import { EventDetailsComponent } from '../event-details/event-details.component';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'day-grid',
  templateUrl: './day-grid.component.html',
  styleUrls: ['./day-grid.component.scss']
})
export class DayGridComponent implements OnChanges {
  @Input() size: number;
  @Input() firstDay: Date;

  fillerDays: Array<void>;
  days: Array<Day>;
  dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  constructor(private dialog: MatDialog) {}

  ngOnChanges() {
    const firstDayOffset = this.firstDay.getDay();
    const firstDayMillis = this.firstDay.getTime();

    this.fillerDays = new Array(firstDayOffset);
    this.days = new Array(this.size);

    let weekDay = firstDayOffset;
    for (let i = 0; i < this.size; ++i) {
      this.days[i] = {
        index: i + 1,
        dayMillis: firstDayMillis + (i * (24 * 60 * 60 * 1000)),
        events: [],
        isWeekend: weekDay === 0 || weekDay === 6,
      };
      weekDay = (weekDay + 1) % 7;
    }
  }

  onEventClick(event: Event) {
    const { title, description, time, participants } = event;
    const [hours, minutes] = time.split(':');
    const date = new Date(this.days[event.date - 1].dayMillis + (+hours * 60 * 60 * 1000) + (+minutes * 60 * 1000)).toUTCString();
    this.dialog.open(EventDetailsComponent, { width: '600px', height: '600px', data: {
      title, description, date, participants
    }});
  }

  onAddEventClick() {
    let dialogRef = this.dialog.open(AddEventComponent, { width: '600px', height: '600px' });
    dialogRef.afterClosed().subscribe(result => {
      const eventDay = this.days[result.date - 1];

      if (eventDay.events.length < 5) {
        eventDay.events.push(result);
        eventDay.events.sort((a, b) => {
          return (+a.time.replace(':', '')) - (+b.time.replace(':', ''))}      
        );
      }
    });
  }
}
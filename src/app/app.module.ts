import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { DayGridComponent } from './day-grid/day-grid.component';
import { MonthSelectComponent } from './month-select/month-select.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEventComponent } from './add-event/add-event.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DayGridComponent,
    MonthSelectComponent,
    EventDetailsComponent,
    AddEventComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
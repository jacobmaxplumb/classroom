import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from '../../../node_modules/calendar-utils';
import { WeekDay } from '../../../node_modules/@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  viewDate: Date;
  events: CalendarEvent[];
  days: WeekDay[];

  constructor() { }

  ngOnInit() {
    this.viewDate = new Date('December 17, 2018 03:24:00');
    this.events = [
      {start: new Date('December 18, 2018 03:24:00'), title: 'Title 1'}
    ];
    this.days = [0, 1, 2, 3, 4, 5, 6];
  }

}

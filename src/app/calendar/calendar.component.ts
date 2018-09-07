import { CalendarEvent } from 'calendar-utils';
import { AssignmentService } from './../services/assignment.service';
import {
  Component,
  ChangeDetectionStrategy,
  DoCheck
} from '@angular/core';
import {
  isSameDay,
  isSameMonth
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    h3 {
      margin: 0 0 10px;
    }

    pre {
      background-color: #f5f5f5;
      padding: 15px;
    }
  `],
  templateUrl: './calendar.component.html'
})
export class AppCalendarComponent implements OnInit, DoCheck {

  view: string;

  viewDate: Date = new Date();

  refresh: Subject<any> = new Subject();

  get events(): CalendarEvent[] {
    return this.assignmentService.allEvents;
  }

  activeDayIsOpen: boolean;

  constructor(private modal: NgbModal, private assignmentService: AssignmentService) {
  }

  ngOnInit() {
    this.view = 'month';
    this.activeDayIsOpen = false;
    this.refresh.next();
  }

  ngDoCheck() {
    // this.events = this.assignmentService.allEvents;
    this.refresh.next();
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }
}

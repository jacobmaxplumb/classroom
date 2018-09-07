import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarModule } from 'angular-calendar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppCalendarComponent } from './calendar/calendar.component';
import { FormsModule } from '../../node_modules/@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlatpickrModule} from 'angularx-flatpickr';
import { AssignmentService } from './services/assignment.service';
import { AddAssignmentsComponent } from './add-assignments/add-assignments.component';
import { AddReadingComponent } from './add-assignments/add-reading/add-reading.component';
import { AddProblemComponent } from './add-assignments/add-problem/add-problem.component';
import { AddOtherComponent } from './add-assignments/add-other/add-other.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AppCalendarComponent,
    AddAssignmentsComponent,
    AddReadingComponent,
    AddProblemComponent,
    AddOtherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [
    AssignmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

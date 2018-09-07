
import { Component, OnInit, DoCheck } from '@angular/core';
import { AssignmentService } from './services/assignment.service';
import { ReadingAssignment, ProblemsTask, BackendReadingAssignment } from './models/schedule.model';

const pages1 = [
  {chapter: 1, pageNumber: 1},
  {chapter: 1, pageNumber: 2},
  {chapter: 2, pageNumber: 3},
  {chapter: 1, pageNumber: 4},
  {chapter: 1, pageNumber: 5},
  {chapter: 1, pageNumber: 6},
  {chapter: 1, pageNumber: 7},
  {chapter: 1, pageNumber: 8},
  {chapter: 1, pageNumber: 9},
  {chapter: 1, pageNumber: 10},
  {chapter: 1, pageNumber: 11},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  loading = true;

  constructor(private assignmentService: AssignmentService) {}

  ngOnInit() {
    this.assignmentService.getReadings().subscribe((res: BackendReadingAssignment[]) => {
      this.assignmentService.processApiReadings(res);
      this.assignmentService.setAllEventData();
      console.log(this.assignmentService.allEvents);
      this.loading = false;
    });
  }
}

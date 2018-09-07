import { AssignmentService } from './../services/assignment.service';
import { Component, OnInit } from '@angular/core';
import { ReadingAssignment } from '../models/schedule.model';

@Component({
  selector: 'app-add-assignments',
  templateUrl: './add-assignments.component.html',
  styleUrls: ['./add-assignments.component.css']
})
export class AddAssignmentsComponent implements OnInit {

  assignments: ReadingAssignment[];
  selectedForm: string;
  class1 = 'btn btn-secondary active';
  class2 = 'btn btn-secondary';
  class3 = 'btn btn-secondary';

  constructor(private assignmentService: AssignmentService) { }

  ngOnInit() {
    this.selectedForm = 'Reading';
    this.assignments = this.assignmentService.readings;
  }

  formSelectionChanged(e) {
    this.selectedForm = e.target.textContent;
  }

}

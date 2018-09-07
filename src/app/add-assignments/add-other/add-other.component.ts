import { AssignmentService } from './../../services/assignment.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/schedule.model';

@Component({
  selector: 'app-add-other',
  templateUrl: './add-other.component.html',
  styleUrls: ['./add-other.component.css']
})
export class AddOtherComponent implements OnInit {

  otherAssignment: Task;
  description: string;

  constructor(private aService: AssignmentService) { }

  ngOnInit() {

  }

  saveAssignment() {
    // this.otherAssignment.title += ' - ' + this.description;
    // this.aService.assignments.push(this.otherAssignment);
    // this.aService.assignmentsToEvents();
    // this.ngOnInit();
  }

}

import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../../services/assignment.service';

@Component({
  selector: 'app-add-problem',
  templateUrl: './add-problem.component.html',
  styleUrls: ['./add-problem.component.css']
})
export class AddProblemComponent implements OnInit {

  problemAssignment: any;
  startRange: number;
  endRange: number;
  problem: number;

  constructor(private aService: AssignmentService) { }

  ngOnInit() {
    this.problemAssignment = {
      id: this.aService.readings.length + 1,
      title: '',
      type: 'Problem',
      start: null,
      due: null,
      unit: 'problem',
      quantity: null,
      ps: []
    };
  }

  addRange() {
    const difference = this.endRange - this.startRange;
    for (let i = 0; i <= difference; i++) {
      this.problemAssignment.ps.push(this.startRange + i);
    }
    this.startRange = null;
    this.endRange = null;
  }

  addProblem() {
    if (this.problemAssignment.ps.includes(this.problem)) {
      alert('problem already added');
      this.problem = null;
    } else {
      this.problemAssignment.ps.push(this.problem);
      this.problem = null;
    }
  }

  removeProblem() {
    const i = this.problemAssignment.ps.indexOf(this.problem);
    if (i) {
      this.problemAssignment.ps.splice(i, 1);
    }
    this.problem = null;
  }

  saveAssignment() {
    // this.problemAssignment.quantity = this.problemAssignment.ps.length;
    // this.aService.assignments.push(this.problemAssignment);
    // this.aService.assignmentsToEvents();
    // this.ngOnInit();
  }

}

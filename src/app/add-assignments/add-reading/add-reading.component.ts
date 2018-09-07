import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../../services/assignment.service';
import { ReadingAssignment, BackendReadingAssignment } from '../../models/schedule.model';

@Component({
  selector: 'app-add-reading',
  templateUrl: './add-reading.component.html',
  styleUrls: ['./add-reading.component.css']
})
export class AddReadingComponent implements OnInit {

  readingAssignment: ReadingAssignment;
  startRange: number;
  endRange: number;
  page: number;
  chapter: number;

  formNotFilledCorrectly: boolean;

  get lastPageIndex() {
    return this.readingAssignment.pages.length - 1;
  }

  constructor(private aService: AssignmentService) { }

  ngOnInit() {
    this.formNotFilledCorrectly = false;
    this.readingAssignment = new ReadingAssignment('2', null, null, [], '', '');
    console.log(this.readingAssignment);
  }

  addRange() {
    this.readingAssignment.addToPages(this.chapter, this.startRange, this.endRange);
    console.log(this.readingAssignment);
  }

  addPage() {
    this.readingAssignment.addToPages(this.chapter, this.page);
    console.log(this.readingAssignment);
  }

  removePage() {
    this.readingAssignment.removePage(this.page, 2);
    console.log(this.readingAssignment);
  }

  saveAssignment() {
    const r = this.readingAssignment;
    if (r.startDate === null || r.dueDate === null || r.pages.length < 1 || r.title === '') {
      this.formNotFilledCorrectly = true;
    } else {
      this.aService.addReadings(this.readingAssignment).subscribe(() => {
        this.aService.getReadings().subscribe((res: BackendReadingAssignment[]) => {
          this.aService.processApiReadings(res);
          this.aService.setAllEventData();
          this.formNotFilledCorrectly = false;
        });
      });
    }
  }

}

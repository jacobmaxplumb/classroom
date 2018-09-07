import { ReadingAssignment, ProblemsTask, Task, BackendReadingAssignment } from './../models/schedule.model';
import { CalendarEvent } from 'calendar-utils';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Page } from '../models/schedule.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  readings: ReadingAssignment[];
  readingEvents: CalendarEvent[];
  problems: ProblemsTask[];
  problemEvents: CalendarEvent[];
  allEvents: CalendarEvent[];

  constructor(
    private _http: HttpClient
  ) {}

  // gets the backend data
  getReadings() {
    return this._http.get('http://localhost:5000/api/readingassignments');
  }

  // takes the data coming in from backend and makes them into new readings
  processApiReadings(assignments: BackendReadingAssignment[]) {
    const aArray: ReadingAssignment[] = [];
    assignments.forEach((a) => {
      const start = new Date(a.startDate);
      const end = new Date(a.dueDate);
      const assignment: ReadingAssignment = new ReadingAssignment(a.classId, start, end, a.pages, a.description, a.title);
      aArray.push(assignment);
    });
    if (aArray !== this.readings) { this.readings = aArray; }
  }

  // posts to backend
  addReadings(readingAssignment: ReadingAssignment) {
    const body = {
      'ClassId': readingAssignment.classId,
      'StartDate': readingAssignment.startDate,
      'DueDate': readingAssignment.dueDate,
      'Pages': readingAssignment.pages,
      'Description': readingAssignment.description,
      'Title': readingAssignment.title
    };
    (this.readings) ? this.readings.push(readingAssignment) : this.readings = [readingAssignment];
    return this._http.post('http://localhost:5000/api/readingassignments', body);
  }

  setAllEventData() {
    (this.readings) ? this.turnReadingsToEvents() : this.readingEvents = [];
    (this.problems) ? this.turnProblemsToEvents() : this.problemEvents = [];
    let assingments = [];
    (this.readingEvents.length > 0) ? assingments.push(this.readingEvents) : this.readingEvents = [];
    (this.problemEvents.length > 0) ? assingments.push(this.problemEvents) : this.problemEvents = [];
    assingments = [].concat.apply([], assingments);
    this.allEvents = assingments;
  }

  // takes reading assignments and sets the reading assignments events
  turnReadingsToEvents() {
    // the events returned
    const eventsArray: CalendarEvent[] = [];

    // for each assignment in the readings assignment
    this.readings.forEach((pAssign) => {

      const pages = pAssign.pages; // set pages
      const assignmentsPerDay = pAssign.getPagesPerDay(); // the assignments per day of current assignment
      const pagesEachDayArray = []; // initialize the pagesEachDayArray
      while (pages.length > 0) {
        pagesEachDayArray.push(pages.splice(0, assignmentsPerDay));
      }

      let lastDate;

      // for each page in the page array
      pagesEachDayArray.forEach((pageArray, index) => {
        lastDate = new Date(pAssign.startDate.getTime() + (index + 1) * 24 * 60 * 60 * 1000);
        const arrayDate = new Date(pAssign.startDate.getTime() + index * 24 * 60 * 60 * 1000);
        const chapters = pageArray.map(page => page.chapter).filter((ch, pos) => {
          return pageArray.map(page => page.chapter).indexOf(ch) === pos;
        });
        const pagesToRead = pageArray.map(page => page.pageNumber);
        let title = `${pAssign.title}: Read Pages ${pagesToRead} in Chapter ${chapters[0]}`;
        if (chapters.length > 1) {
          title = '';
          chapters.forEach((ch, i) => {
            const pageNumbers = [];
            const ps = pageArray.filter(p => p.chapter === ch).forEach((p) => {
              pageNumbers.push(p.pageNumber);
            });
            if (i === chapters.length - 1) {
              title += `${pAssign.title}: Read Pages ${pageNumbers} in Chapter ${ch}.`;
            } else {
              title += `${pAssign.title}: Read Pages ${pageNumbers} in Chapter ${ch}. `;
            }
          });
        }
        eventsArray.push({
          start: arrayDate,
          title: title
        });
      });
      eventsArray.push({
        start: lastDate,
        title: `${pAssign.title}'s due date`,
      });
    });
    this.readingEvents = eventsArray;
  }

  // takes the problems and sets the problems events
  turnProblemsToEvents() {
    // the events returned
    const eventsArray: CalendarEvent[] = [];

    // for each assignment in the readings assignment
    this.problems.forEach((pAssign) => {

      const problems = pAssign.problems; // set problems
      const assignmentsPerDay = pAssign.getProblemsPerDay(); // the assignments per day of current assignment
      const problemsEachDayArray = []; // initialize the problemsEachDayArray
      while (problems.length > 0) {
        problemsEachDayArray.push(problems.splice(0, assignmentsPerDay));
      }

      // for each problem in the problem array
      problemsEachDayArray.forEach((problemArray, index) => {
        const arrayDate = new Date(pAssign.startDate.getTime() + index * 24 * 60 * 60 * 1000);
        const chapters = problemArray.map(problem => problem.chapter).filter((ch, pos) => {
          return problemArray.map(problem => problem.chapter).indexOf(ch) === pos;
        });
        const problemsToRead = problemArray.map(problem => problem.problemNumber);
        let title = `${pAssign.title}: Do problems ${problemsToRead} in Chapter ${chapters[0]}`;
        if (chapters.length > 1) {
          title = '';
          chapters.forEach((ch, i) => {
            const problemNumbers = [];
            const ps = problemArray.filter(p => p.chapter === ch).forEach((p) => {
              problemNumbers.push(p.problemNumber);
            });
            if (i === chapters.length - 1) {
              title += `${pAssign.title}: Do problems ${problemNumbers} in Chapter ${ch}.`;
            } else {
              title += `${pAssign.title}: Do problems ${problemNumbers} in Chapter ${ch}. `;
            }
          });
        }
        eventsArray.push({
          start: arrayDate,
          title: title
        });
      });
    });
    this.problemEvents = eventsArray;
  }
}

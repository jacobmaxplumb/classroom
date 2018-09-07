// import { CalendarEvent } from 'calendar-utils';
// import { Assignment } from './app/services/assignment.service';

// export const ASSIGNMENT_DATA: Assignment[] = [
//   {
//     id: 1,
//     type: 'Read',
//     start: new Date('September 2, 2018'),
//     due: new Date('September 10, 2018'),
//     unit: 'page',
//     quantity: 7,
//     ps: [1, 2, 3, 4, 5, 6, 7]
//   }
  // {
  //   id: 2,
  //   type: 'Problem',
  //   start: new Date('September 4, 2018'),
  //   due: new Date('September 10, 2018'),
  //   unit: 'problem',
  //   quantity: null,
  //   ps: [[1, 2, 3, 4, 5], [6], [7]]
  // },
  // {
  //   id: 1,
  //   type: 'Other',
  //   start: new Date('September 2, 2018'),
  //   due: new Date('September 14, 2018'),
  //   unit: 'hr',
  //   quantity: 5
  // }
// ];

// export const EVENT_DATA: CalendarEvent[] = [
//       {
//         title: 'New event 1',
//         start: new Date('September 2, 2018'),
//         end: null,
//         color: {primary: '#00ff00', secondary: '#00ff00'},
//         draggable: true,
//         resizable: {
//           beforeStart: true,
//           afterEnd: true
//         },
//         meta: {
//           type: '',
//           buttonClicked: '',
//           assignment: [],
//           otherAssignment: null,
//           finalAssignment: null
//         }
//       },
//       {
//         title: 'New event 2',
//         start: new Date('September 2, 2018'),
//         end: null,
//         color: {primary: '#00ff00', secondary: '#00ff00'},
//         draggable: true,
//         resizable: {
//           beforeStart: true,
//           afterEnd: true
//         },
//         meta: {
//           type: '',
//           buttonClicked: '',
//           assignment: [],
//           otherAssignment: null,
//           finalAssignment: null
//         }
//       },
// ];

// export function changeColor(event: CalendarEvent, color: string) {
//   event.color = {primary: color, secondary: color};
// }

// <div class="col-12">
//       <br>
//     </div>

    // <div class="col-12 padding-border">

    //   <div class="row">
    //     <div class="col-6 offset-3">
    //       <h3>
    //         Edit events
    //         <button class="btn btn-primary pull-right" (click)="addEvent()">
    //           Add new
    //         </button>
    //         <div class="clearfix"></div>
    //       </h3>
    //     </div>
    //   </div>

    //   <div class="row">
    //     <div class="col-12">
    //       <table class="table table-bordered center">

    //         <thead>
    //           <tr>
    //             <th>Title</th>
    //             <th>Type</th>
    //             <th>Task</th>
    //             <th>Save</th>
    //             <th>Starts at</th>
    //             <th>Due Before</th>
    //             <th>Remove</th>
    //           </tr>
    //         </thead>

    //         <tbody>
    //           <tr *ngFor="let event of events; let index = index">

    //             <td style="vertical-align: middle">
    //               <input type="text" class="form-control" [(ngModel)]="event.title" (keyup)="refresh.next()">
    //             </td>

    //             <td style="text-align: left">
    //               <div class="row">
    //                 <div class="col-12">
    //                   <input type="radio" [name]="'type' + index" [(ngModel)]="event.meta.type" value="Read" (change)="radioClicked(event, $event)"> Reading
    //                 </div>
    //                 <div class="col-12">
    //                   <input type="radio" [name]="'type' + index" [(ngModel)]="event.meta.type" value="Problem" (change)="radioClicked(event, $event)"> Problems
    //                 </div>
    //                 <div class="col-12">
    //                   <input type="radio" [name]="'type' + index" [(ngModel)]="event.meta.type" value="Other" (change)="radioClicked(event, $event)"> Other
    //                 </div>
    //               </div>
    //             </td>

    //             <td>
    //               <!-- display the buttons for pages and problems-->
    //               <div class="row" *ngIf="(event.meta.type === 'Read' || event.meta.type === 'Problem') && event.meta.buttonClicked === '' && event.meta.finalAssignment === null">
    //                 <div class="col-12">
    //                   <button class="btn btn-primary" style="width: 100%" (click)="rangeClicked(event)">Range</button>
    //                 </div>
    //                 <div class="col-12">
    //                   <button class="btn btn-success" style="width: 100%" (click)="singleClicked(event)">Add/Remove One</button>
    //                 </div>
    //               </div>

    //               <!-- when there is no radio clicked -->
    //               <div class="row" *ngIf="event.meta.type === ''"></div>

    //               <!-- when the pages or problems radio and the range -->
    //               <div class="row" *ngIf="(event.meta.type === 'Read' || event.meta.type === 'Problem') && event.meta.buttonClicked === 'range'  && event.meta.finalAssignment === null">
    //                 <div class="col-1"></div>
    //                 <div class="col-5" style="padding-right: 0">
    //                   <input type="number" style="width: 100%" [(ngModel)]="tempStart" placeholder="start">
    //                 </div>
    //                 <div class="col-5" style="padding-left: 0">
    //                   <input type="number" style="width: 100%" [(ngModel)]="tempEnd" placeholder="end">
    //                 </div>
    //                 <div class="col-12">
    //                   <button class="btn btn-success" style="width: 100%" (click)="submitRangeClicked(event)">Submit</button>
    //                 </div>
    //                 <div class="col-12">
    //                   <button class="btn btn-danger" style="width: 100%" (click)="cancelRangeClicked(event)">Cancel</button>
    //                 </div>
    //               </div>

    //               <!-- when the pages or problems radio and the single -->
    //               <div class="row" *ngIf="(event.meta.type === 'Read' || event.meta.type === 'Problem') && event.meta.buttonClicked === 'single'  && event.meta.finalAssignment === null">
    //                 <div class="col-12">
    //                   <input type="number" style="width: 100%" [(ngModel)]="tempSingleNumber" placeholder="number">
    //                 </div>
    //                 <div class="col-6" style="padding-right: 0">
    //                   <button class="btn btn-success" style="width: 100%" (click)="addSingleClicked(event)">Add</button>
    //                 </div>
    //                 <div class="col-6" style="padding-left: 0">
    //                   <button class="btn btn-danger" style="width: 100%" (click)="removeSingleClicked(event)">Remove</button>
    //                 </div>
    //               </div>

    //               <!-- when the other radio -->
    //               <div class="row" *ngIf="event.meta.type === 'Other'  && event.meta.finalAssignment === null">
    //                 <div class="col-8">
    //                   <input type="text" style="width: 100%" [(ngModel)]="tempDescription">
    //                 </div>
    //                 <div class="col-4">
    //                   <input type="text" style="width: 100%" [(ngModel)]="tempTime">
    //                 </div>
    //                 <div class="col-6">
    //                   <button class="btn btn-danger" style="width: 100%" (click)="addOtherTask(event)">Add</button>
    //                 </div>
    //                 <div class="col-6">
    //                   <button class="btn btn-danger" style="width: 100%" (click)="cancelOtherTask(event)">Cancel</button>
    //                 </div>
    //               </div>

    //               <!-- when the other solution -->
    //               <div class="row" *ngIf="event.meta.finalAssignment !== null && solutionSee.includes(index)">
    //                 <p style="text-align: center" *ngIf="event.meta.type === 'Read'">Read Page(s):</p>
    //                 <p style="text-align: center" *ngIf="event.meta.type === 'Problem'">Do Problem(s):</p>
    //                 <ul *ngIf="event.meta.finalAssignment.length > 1">
    //                   <li *ngFor="let task of event.meta.finalAssignment">{{task}}</li>
    //                 </ul>
    //                 <ul *ngIf="event.meta.finalAssignment.length === 1">
    //                   <li>{{event.meta.assignment.problems[0]}}</li>
    //                 </ul>
    //               </div>

    //             </td>

    //             <td style="vertical-align: middle">
    //               <button class="btn btn-success" style="width: 100%" (click)="saveEvent(event)" >Save</button>
    //             </td>

    //             <td style="vertical-align: middle">
    //               <input class="form-control" type="date" [value]="event.start.toISOString().slice(0,10)" (ngModelChange)="refresh.next()"
    //                 (change)="changeDateStart(event, $event)" placeholder="Not set">
    //             </td>

    //             <td style="vertical-align: middle">
    //               <input class="form-control" type="date" [value]="event.end ? event.end.toISOString().slice(0,10) : ''" (ngModelChange)="refresh.next()"
    //                 (change)="changeDateEnd(event, $event)" placeholder="Not set">
    //             </td>

    //             <td style="vertical-align: middle">
    //               <button class="btn btn-danger" (click)="events.splice(index, 1); refresh.next()">
    //                 Delete
    //               </button>
    //             </td>

    //           </tr>
    //         </tbody>
    //       </table>
    //     </div>
    //   </div>

    // </div>

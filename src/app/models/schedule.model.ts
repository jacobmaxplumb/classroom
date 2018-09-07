export class Task {
  constructor(
    public id: string,
    public classId: string,
    public startDate: Date,
    public dueDate: Date,
    public description?: string,
    public title?: string
  ) {}
}

export interface Page {
  pageNumber: number;
  chapter: number;
}

export interface Problem {
  problemNumber: number;
  chapter: number;
}

export class ProblemsTask extends Task {

  constructor(
    public id: string,
    public classId: string,
    public startDate: Date,
    public dueDate: Date,
    public problems: Problem[],
    public description?: string,
    public title?: string,
  ) {
    super(id, classId, startDate, dueDate, description, title);
  }

  getProblemsPerDay(): number {
    const days = Math.ceil(Math.abs(this.startDate.getTime() - this.dueDate.getTime()) / (1000 * 3600 * 24));
    const problemCount = this.problems.length;
    return Math.ceil(problemCount / days);
  }
}

export class InternalId {
  creationTime: Date;
  increment: number;
  machine: number;
  pid: number;
  timestamp: number;
}

export class BackendReadingAssignment {
  constructor(
    public classId: string,
    public startDate: Date,
    public dueDate: Date,
    public pages: Page[],
    public description: string,
    public title: string,
    public internalId: InternalId
  ) {}
}

export class ReadingAssignment {

  constructor(
    public classId: string,
    public startDate: Date,
    public dueDate: Date,
    public pages: Page[],
    public description?: string,
    public title?: string,
  ) {}

  getPagesPerDay(): number {
    const days = Math.ceil(Math.abs(this.startDate.getTime() - this.dueDate.getTime()) / (1000 * 3600 * 24));
    const pagesCount = this.pages.length;
    return Math.ceil(pagesCount / days);
  }

  addToPages(chapter: number, startPage: number, endPage?: number) {
    if (endPage) {
      const length = endPage - startPage;
      for (let i = 0; i <= length; i++) {
        this.pages.push({
          chapter: chapter,
          pageNumber: startPage + i
        });
      }
    } else {
      this.pages.push({
        chapter: chapter,
        pageNumber: startPage
      });
    }
  }

  removePage(chapter: number, page: number) {
    const index = this.pages.indexOf({
      chapter: chapter,
      pageNumber: page
    });
    this.pages.splice(index, 1);
  }
}



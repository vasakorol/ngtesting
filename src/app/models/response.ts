import {User} from './user';

export class Response {
  readonly page: number;
  readonly perPage: number;
  readonly total: number;
  readonly totalPages: number;
  readonly data: User[] | any;

  constructor(obj?: any) {
    this.page = obj && obj.page ? obj.page : null;
    this.perPage = obj && obj.perPage ? obj.perPage : null;
    this.total = obj && obj.total ? obj.total : null;
    this.totalPages = obj && obj.totalPages ? obj.totalPages : null;
    this.data = obj && obj.data ? obj.data : [];
  }
}

import {User} from './user';

export class UserResponse {
  readonly page: number;
  readonly perPage: number;
  readonly total: number;
  readonly totalPages: number;
  readonly data: User[] | any;

  constructor(obj?: any) {
    this.page = obj && obj.page ? obj.page : null;
    this.perPage = obj && obj.per_page ? obj.per_page : null;
    this.total = obj && obj.total ? obj.total : null;
    this.totalPages = obj && obj.total_pages ? obj.total_pages : null;
    this.data = obj && obj.data ? obj.data : [];
  }
}

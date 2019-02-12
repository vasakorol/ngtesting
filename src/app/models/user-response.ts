import {User} from './user';

export class UserResponse {
  readonly page: number;
  readonly per_page: number;
  readonly total: number;
  readonly total_pages: number;
  readonly data: User[] | any;

  constructor(obj?: any) {
    this.page = obj && obj.page ? obj.page : null;
    this.per_page = obj && obj.per_page ? obj.per_page : null;
    this.total = obj && obj.total ? obj.total : null;
    this.total_pages = obj && obj.total_pages ? obj.total_pages : null;
    this.data = obj && obj.data ? obj.data : [];
  }
}

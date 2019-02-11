export class User {
  private baseId: number;
  private firstName: string;
  private lastName: string;
  private photo: string;

  constructor(obj?: any) {
    this.baseId = obj && obj.id ? obj.id : null;
    this.firstName = obj && obj.first_name ? obj.first_name : '';
    this.lastName = obj && obj.last_name ? obj.last_name : '';
    this.photo = obj && obj.avatar ? obj.avatar : '';
  }

  get id(): number {
    return this.baseId;
  }

  get first_name(): string {
    return this.firstName;
  }

  set first_name(value: string) {
    this.firstName = value;
  }

  get last_name(): string {
    return this.lastName;
  }

  set last_name(value: string) {
    this.lastName = value;
  }

  get avatar(): string {
    return this.photo;
  }

  set avatar(value: string) {
    this.photo = value;
  }
}

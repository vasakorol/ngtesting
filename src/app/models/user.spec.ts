import { User } from './user';

describe('User', () => {
  const tmpUser = {
    id: 12,
    first_name: 'Bob',
    last_name: 'Billy',
    avatar: 'https://st2.depositphotos.com/1007566/12304/v/950/depositphotos_123041468-stock-illustration-avatar-man-cartoon.jpg'
  };
  let user = null;
  beforeEach(() => {
    user = new User(tmpUser);
  });
  it('should create an instance', () => {
    expect(new User()).toBeTruthy();
  });
  it('should model have same values as tmpUser', (done) => {
    expect(user.id).toBe(tmpUser.id);
    expect(user.first_name).toEqual(tmpUser.first_name);
    expect(user.last_name).toEqual(tmpUser.last_name);
    expect(user.avatar).toEqual(tmpUser.avatar);
    done();
  });
  it('should model change own value when change model', () => {
    const firstName = 'Jimmy';
    const lastName = 'Jiraff';
    const avatar = 'https://newawatar.com/avatar.com';
    user.first_name = firstName;
    user.last_name = lastName;
    user.avatar = avatar;
    expect(user.first_name).toEqual(firstName);
    expect(user.last_name).toEqual(lastName);
    expect(user.avatar).toEqual(avatar);
  });
});

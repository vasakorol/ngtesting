import { UserResponse } from './user-response';

describe('Response', () => {
  const userResponseMock = {
    page: 1,
    per_page: 3,
    total: 12,
    total_pages: 4,
    data: [
      {id: 1, first_name: 'George', last_name: 'Bluth', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg'},
      {id: 2, first_name: 'Janet', last_name: 'Weaver', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg'}
    ]
  };
  it('should create an instance', () => {
    expect(new UserResponse()).toBeTruthy();
  });

  it('should create an instance', () => {
    const response = new UserResponse(userResponseMock);
    expect(response.page).toBe(userResponseMock.page);
    expect(response.perPage).toBe(userResponseMock.per_page);
    expect(response.total).toBe(userResponseMock.total);
    expect(response.totalPages).toBe(userResponseMock.total_pages);
    expect(response.data).toBe(userResponseMock.data);
  });
});

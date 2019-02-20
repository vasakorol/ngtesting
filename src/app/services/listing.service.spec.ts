import { getTestBed, TestBed } from '@angular/core/testing';

import { ListingService } from './listing.service';
import { ApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ListingService', () => {
  let listingService: ListingService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService, ListingService]
    });
    injector = getTestBed();
    listingService = injector.get(ListingService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be toBeDefined', () => {
    expect(listingService).toBeDefined();
  });

  it('should return number value', () => {
    expect(listingService.getPage()).toEqual(1);
  });

  const userResponseMock = {
    page: 1,
    perPage: 3,
    total: 12,
    totalPages: 4,
    data: [
      {id: 1, first_name: 'George', last_name: 'Bluth', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg'},
      {id: 2, first_name: 'Janet', last_name: 'Weaver', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg'}
    ]
  };

  describe('#getUsers Observable<UserResponse>', () => {
    it('should return an Observable', () => {
      listingService.getUsers().subscribe((response) => {
        expect(response.page).toBe(listingService.getPage());
        expect(response).toEqual(userResponseMock);
        expect(response.data.length).toBe(2);
      });
      const req = httpMock.expectOne(`https://reqres.in/api/users`);
      expect(req.request.method).toBe('GET');
      req.flush(userResponseMock);
    });
  });

  describe('#getUsers Observable<User[]>', () => {
    it('should return empty Observable', () => {
      listingService.users.subscribe(users => {
        expect(users.length).toBe(0);
      });
    });
    it('should return an Observable', () => {
      let first = true;
      listingService.users.subscribe(users => {
        if (first) {
          expect(users.length).toEqual(0);
          first = false;
        } else {
          expect(users.length).toEqual(userResponseMock.data.length);
        }
      });
      listingService.getList();
      const req = httpMock.expectOne(`https://reqres.in/api/users`);
      expect(req.request.method).toBe('GET');
      req.flush(userResponseMock);
    });
  });

  describe('#getPromise List', () => {
    it('should get data from promise', (done) => {

    });
  });
});

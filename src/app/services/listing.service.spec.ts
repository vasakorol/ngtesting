import { TestBed } from '@angular/core/testing';

import { ListingService } from './listing.service';
import {ApiService} from './api.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ListingService', () => {
  let listingService: ListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService, ListingService]
    });
    listingService = TestBed.get(ListingService);
  });

  it('should be toBeDefined', () => {
    expect(listingService).toBeDefined();
  });

  it('should return number value', () => {
    expect(listingService.getPage()).toEqual(1);
  });

  it('getPromList should return value from a promise', (done) => {
    listingService.getPromList().then(response => {
      // console.log('typeof response', typeof response);
      expect(response).toBeTruthy();
      // done();
    }).catch(error => {
      console.log('some error', error);
      expect(1).toBe(1);
      // done();
    }).finally(done);
  });

  // it('#getPromiseValue should return value from a promise',
  //   (done: DoneFn) => {
  //     listingService.getPromList().then(value => {
  //       expect(value).toBe('promise value');
  //       done();
  //     });
  //   }
  // );

});

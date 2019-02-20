import { Component, OnInit } from '@angular/core';
import { ListingService } from '../../services/listing.service';
import { UserResponse } from '../../models/user-response';
import { User } from '../../models/user';

@Component({
  selector: 'ngt-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  list: User[];

  constructor(
    private listingService: ListingService
  ) {
    this.list = [];
  }

  ngOnInit() {
    this.getList();
  }

  getList() {
    // this.listingService.getPromList().then((response: UserResponse) => {
    //   this.list = response.data;
    // });
  }
}

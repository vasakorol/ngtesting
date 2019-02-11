import { Component, OnInit } from '@angular/core';
import {ListingService} from '../../services/listing.service';
import { Response } from '../../models/response';
import {User} from '../../models/user';

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
    this.listingService.getPromList().then((response: Response) => {
      this.list = response.data;
    });
  }
}

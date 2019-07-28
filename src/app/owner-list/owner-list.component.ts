import { Component, OnInit } from '@angular/core';
import {OwnerService} from '../shared/owner/owner.service';


@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {
  owners: any[];

  constructor( private ownerService: OwnerService) { }

  ngOnInit() {
    this.getOwners();
  }
  getOwners(){
    this.ownerService.getAll().subscribe(owners => {
      this.owners = owners['_embedded']['owners'];      
    });
  }


}
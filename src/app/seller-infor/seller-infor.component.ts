import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-seller-infor',
  templateUrl: './seller-infor.component.html',
  styleUrls: ['./seller-infor.component.css']
})
export class SellerInforComponent implements OnInit {

  id: number;

  constructor(routes: ActivatedRoute) {
    this.id = routes.snapshot.params['id'];

  }

  ngOnInit() {
  }

}

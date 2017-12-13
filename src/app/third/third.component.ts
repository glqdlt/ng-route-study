import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Routes} from '@angular/router';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  checkLeave: boolean;

  constructor(private routes: Router) {
    this.checkLeave = false;
  }

  ngOnInit() {
  }

  leaveComponent() {
    this.checkLeave = true;
    this.routes.navigateByUrl('/');
  }
}

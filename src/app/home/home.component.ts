import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  status: boolean = false;
  hideList: boolean = true;
  constructor() { }

  ngOnInit() {
  }


  clickEvent() {
    this.status = !this.status;
    this.hideList = !this.hideList;
  }
}

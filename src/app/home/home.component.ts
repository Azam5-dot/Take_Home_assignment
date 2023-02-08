import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // varibales
  public data: any;
  public endPoint = 'users'

  constructor(private userDataService: UserDataService) {}

  ngOnInit() {
    this.callUserData()
  }

  callUserData() {
    let data = {
      urlEndpoint: this.endPoint
    }
    this.userDataService.commonService(data).subscribe(res => {
      this.data = res;
    });
  }

}

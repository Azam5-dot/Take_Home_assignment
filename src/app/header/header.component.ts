import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers:[DatePipe]
})
export class HeaderComponent implements OnInit {
  // variables
  public myDate: any;
  currentDate = new Date();
  constructor(private datePipe: DatePipe) {
    // this.myDate = this.currentDate.transform(this.myDate, 'yyyy-MM-dd')
    console.log(this.currentDate);
    
  }

  ngOnInit() {
  }

}

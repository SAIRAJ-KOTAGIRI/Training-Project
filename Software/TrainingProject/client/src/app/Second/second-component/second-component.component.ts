import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponent implements OnInit {

  constructor() { }
  public SecondString:String;
  ngOnInit() {
    this.SecondString = "HI sairaj from SeocndComponent"
  }

}

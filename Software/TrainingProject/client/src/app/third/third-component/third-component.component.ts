import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-component',
  templateUrl: './third-component.component.html',
  styleUrls: ['./third-component.component.css']
})
export class ThirdComponentComponent implements OnInit {
  public thirdString:string;
  constructor() { }

  ngOnInit() {
    this.thirdString = "hi from 3rd Component"
  }

}

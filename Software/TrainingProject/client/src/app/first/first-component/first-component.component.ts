import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponent implements OnInit {
  public myFirstProperty: String;
  constructor() { }

  ngOnInit() {
    this.myFirstProperty = "Hello Sai Raj from 1st component";
  }

}

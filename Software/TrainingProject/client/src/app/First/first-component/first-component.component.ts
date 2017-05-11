import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  public FirstString:string;
  constructor() { }

  ngOnInit() {
    this.FirstString = "From First Component"
  }

}

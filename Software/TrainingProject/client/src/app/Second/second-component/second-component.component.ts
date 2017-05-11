import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css'],
  inputs:['arr']
})
export class SecondComponent {
  constructor() { }
  editfun(...newarr){
    alert("from save")
    console.log(newarr[0],newarr[1]);
  }
  delfun(...newarr){
    alert("from Delete")

    console.log(newarr[0],newarr[1]);
  }
  ngOnInit() {

  }

}

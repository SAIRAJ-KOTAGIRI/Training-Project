import {Component, Input} from '@angular/core';
import {letProto} from "rxjs/operator/let";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  arr:Array<any> = [];
  /*jsonobject = {
    fname:"",
    lname:"",
    mailid:"",
    mobnum:undefined
  };
*/
  /*title = ' works SucessFully!';
  newstr:string;
  videos:Array<String>;
  constructor(){
    this.videos = [
      new String("Installing jango"),
      new String("sairaj"),
      new String("sai"),
      new String("bye")
    ]
  }*/

  /*mehtod(){
    this.arr.push(this.JsonObjecttemp);
//    this.arr.push(this.JsonObjecttemp)
    console.log(this.arr);
    /!*(<HTMLInputElement>document.getElementById('fname')).value = "";
    (<HTMLInputElement>document.getElementById('lname')).value  = "";
    (<HTMLInputElement>document.getElementById('mailid')).value  = "";
    (<HTMLInputElement>document.getElementById('mobnum')).value  = undefined;*!/
    //this.(<HTMLInputElement>document.getElementById('De')).reset();
  }*/
  mehtod(){
    var t = new AppComponent();
    let nfname = (<HTMLInputElement>document.getElementById('fname')).value
    let nlname = (<HTMLInputElement>document.getElementById('lname')).value
    let nemailid  = (<HTMLInputElement>document.getElementById('mailid')).value
    let nmobnum = parseInt((<HTMLInputElement>document.getElementById('mobnum')).value)
    var jsonobject = {
      fname:nfname,
      lname:nlname,
      emailid:nemailid,
      mobnum:nmobnum
    };
    this.arr.push(jsonobject);
    console.log(this.arr);
  }
}

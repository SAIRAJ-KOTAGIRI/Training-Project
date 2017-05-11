import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template:`<p>Hello {{lname }}</p>
  // <p>{{hai}}</p>
  // <p>{{email}}</p>
  // <p>{{addres.street}} {{addres.city}} {{addres.State}}</p>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  hai = 'Hai';
  lname = 'Sairaj';
  email = 'sai@gmail.com';
  addres  = {
    street: 'ShabuNagar',
    city: 'Miryalguda',
    State: 'Telangana'
  }
}

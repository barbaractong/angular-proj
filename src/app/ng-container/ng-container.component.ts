import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {

  users = [
    { login: "blob", role: "admin", lastlogin: new Date('06/04/2020')},
    { login: "Lia", role: "user", lastlogin: new Date('01/04/2020')},
    { login: "John", role: "admin", lastlogin: new Date('06/04/2020')},
    { login: "Robin", role: "use", lastlogin: new Date('06/04/2020')},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

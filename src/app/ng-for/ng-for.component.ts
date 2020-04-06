import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  names = [
    "Anna",
    "John",
    "Mark",
    "Mariel",
  ]

  cities = [
    {name: "São Paulo", state: "SP"},
    {name: "Rio de Janeiro", state: "RJ"},
    {name: "Curitiba", state: "PR"},
    {name: "Porto Alegre", state: "RS"},
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}

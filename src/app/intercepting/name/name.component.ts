import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  private _name = "";

  @Input() 
  set name(name: string){
    this._name = "Your name: " + (name.trim().toUpperCase() || '<name empty>');
  }

  get name() : string{ // html acessara essa funcao para retornar o name
    return this._name;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

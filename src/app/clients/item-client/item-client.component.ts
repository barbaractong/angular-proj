import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/input-binding/client.model';

@Component({
  selector: 'app-item-client',
  templateUrl: './item-client.component.html',
  styleUrls: ['./item-client.component.css']
})
export class ItemClientComponent implements OnInit {

  @Input() client: Client;
  onEdit = false;
  constructor() { }

  ngOnInit(): void {
  }

  edit(){
    this.onEdit = true;
  }

  remove(){
    
  }

  save(){
    this.onEdit = false;
  }
}

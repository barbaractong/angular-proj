import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TimerComponent } from './timer/timer.component'
@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {

  @ViewChild("#stopwatch")
  private myTimer: TimerComponent;

  @ViewChild("myP")
  private myp: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  start(){
    this.myTimer.start();
  }

  stop(){
    this.myTimer.stop();
  }

  clear(){
    this.myTimer.clear();
  }

  ngAfterViewInit() {
    console.log(this.myp)
  }

}

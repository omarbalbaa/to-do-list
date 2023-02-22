import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})

export class Child1Component implements OnInit {
  @Output() taskEmitter = new EventEmitter<string>();
  task:string = "t";
  
  constructor() { }

  ngOnInit(): void {
  }

  sendTask(task:string){
    this.taskEmitter.emit(task) ;
  }
}

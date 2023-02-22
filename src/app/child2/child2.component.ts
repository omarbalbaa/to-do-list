import { Component, Input,Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  @Input() sendTask = [''];
  @Output() eventEmitter = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    console.log(this.sendTask);
  }
  remove(task:string){
    this.eventEmitter.emit(task) ;
  }
  check(){
    const element: HTMLElement = document.getElementById('newTask') as HTMLElement;
    if (element != null){
      element.classList.add('text-decoration-line-through');
    }
  }
}

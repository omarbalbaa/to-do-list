import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  task = [''];
  constructor() { }

  ngOnInit(): void {
  }
  getDataFromChild1(value:string){
    console.log(value)
    this.task.push(value);
  }
  delDataFromChild1(sendTask:string){
   for (let i = 0; i<this.task.length;i++) {
     if (sendTask == this.task[i]){
       this.task.splice(i,1);
     }
   }
  }
}

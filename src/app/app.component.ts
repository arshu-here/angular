import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:any;
  colorOfText="unknown";
  salary!:number;
  color='elseColor';

  fruits:string[] = ['mango', 'apple', 'banana', 'leechi'];

  constructor() {
    this.title = 'hello world';
    this.salary = 100;
  }

  checkSalary() {
    return this.salary > 100;
  }

  changeTitle() {
   if(this.salary <= 100)
   {
    this.salary = 200;
   }else {
    this.salary = 100;
   }
  }

}

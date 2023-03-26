import { Component,Input ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent {

  @Input() list!:string[];
  @Input() bio!:any;
  @Output('customEvent') childFunction = new EventEmitter<string>();


  showData() {
    this.childFunction.emit('this is message from child');
  }




}

// childFunction is a event like (click), so it will emit value means this 
// event will be triggered and it will return some value like we do in 
// input case
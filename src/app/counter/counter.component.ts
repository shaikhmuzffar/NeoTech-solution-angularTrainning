import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  title="counter";
  count=0;
  counter(type:string){
    if(type=='inc'){
      this.count++;
    }else{
      if(this.count>0){
        this.count--;
      }
    }
  }
}

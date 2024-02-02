import { Component } from '@angular/core';
import { RxjsDemoService } from '../rx-js-demo/rxjs-demo.service';
import { CommonModule } from '@angular/common';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  value:number = 0;

  constructor(public service: RxjsDemoService){

    this.service.counter.pipe(filter(x=>x % 5 == 0))
    .subscribe(x=>{
      this.value = x
    })

  }

}

import { Component, OnDestroy } from '@angular/core';
import { RxjsDemoService } from '../rx-js-demo/rxjs-demo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnDestroy {

  value: number = 0;

  subscription;

  constructor(public service: RxjsDemoService) {
    this.subscription = this.service.counter.subscribe(x => {
      this.value = x * 6
    });   

  }


  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}

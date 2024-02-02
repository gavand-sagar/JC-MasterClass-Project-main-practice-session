import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RxjsDemoService } from './rxjs-demo.service';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-rx-js-demo',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './rx-js-demo.component.html',
  styleUrl: './rx-js-demo.component.css'
})
export class RxJsDemoComponent {



  constructor(public service: RxjsDemoService) {


  }





}

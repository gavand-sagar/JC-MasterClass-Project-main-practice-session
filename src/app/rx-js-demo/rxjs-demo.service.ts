import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsDemoService {

  private valueSubject: BehaviorSubject<number>;
  public counter: Observable<number>;

  constructor() {

    this.valueSubject = new BehaviorSubject<number>(10);
    this.counter = this.valueSubject.asObservable();

  }


  increment() {
    //this.number = 50;
    this.valueSubject.next(this.valueSubject.value + 1)
  }


  increamentBytwo() {
    //this.counter += 2;
    this.valueSubject.next(this.valueSubject.value + 2)
  }


  increamentValue() {
    //this.counter += 2;
    this.valueSubject.next(this.valueSubject.value + 234)
  }
}

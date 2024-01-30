import { Injectable } from '@angular/core';

@Injectable()
export class MyServiceService {

  myName: string = "Superman";
  counter: number = 0;


  increment() {
    this.counter++;
  }

  constructor() {


  }
}

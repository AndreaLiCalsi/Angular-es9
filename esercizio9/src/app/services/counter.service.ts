import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter: number = 0;

  constructor() { }

  getValue() {
    if (this.counter >= 0) {
      return this.counter;
    }
    else
    return 'counter cannot be negative';
  }

  addValue(value: number) {
    this.counter = value ? (this.counter + +value) : (this.counter + 1);
    console.log(this.counter);
  }

  subValue(value: number = 1) {
    this.counter = value ? (this.counter - value) : (this.counter - 1);
    console.log(this.counter);
  }
}

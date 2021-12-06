import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter: number = 0;

  constructor() { }

  getValue() {
    if (this.counter >= 0) {
      console.log(this.counter);
    }
    else
    console.error('counter cannot be negative');
  }

  addValue(value: number = 1) {
    this.counter = this.counter + value;
    console.log(this.counter);
  }

  subValue(value: number = 1) {
    this.counter = this.counter - value;
    console.log(this.counter);
  }
}


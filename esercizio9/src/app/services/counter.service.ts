import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counterSubject = new BehaviorSubject<number>(0);

  constructor() { }

  getCounter() {
    if (this.counterSubject.getValue() >= 0) {
      return this.counterSubject.getValue();
    }
    else
    return 'counter cannot be negative';
  }

  addValue(value: number) {
    this.counterSubject.next(value ? (this.counterSubject.getValue() + +value) : (this.counterSubject.getValue() + 1));
  }

  subValue(value: number) {
    this.counterSubject.next(value ? (this.counterSubject.getValue() - value) : (this.counterSubject.getValue() - 1));
  }
}

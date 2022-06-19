import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RateService {

  rate: number | undefined;
  step: number = 1;

  constructor() { }

  setRate(value: number) {
    this.rate = value;
  }

  handleSubmit() {
    if (typeof (this.rate) === 'number' && this.rate > 0) {
      this.step = 2;
    } else {
      this.step = 3;
    }
  }

  handleBack() {
    this.step = 1;
  }
}

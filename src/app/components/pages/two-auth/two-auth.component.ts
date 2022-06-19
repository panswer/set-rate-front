import { Component, OnInit } from '@angular/core';

import { RateService } from '../../../services/rate.service';

@Component({
  selector: 'app-two-auth',
  templateUrl: './two-auth.component.html',
  styleUrls: ['./two-auth.component.css']
})
export class TwoAuthComponent implements OnInit {

  step: number = 0;

  constructor(
    private rateService: RateService
  ) { }

  ngOnInit(): void {
    this.step = this.rateService.step;
  }

  handeleSubmit() {
    this.rateService.handleSubmit();

    this.step = this.rateService.step;
  }

  handleBack() {
    this.rateService.handleBack();

    this.step = this.rateService.step;
  }
}

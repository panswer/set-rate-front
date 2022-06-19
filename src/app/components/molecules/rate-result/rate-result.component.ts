import { Component, OnInit } from '@angular/core';

import { RateService } from '../../../services/rate.service';

@Component({
  selector: 'app-rate-result',
  templateUrl: './rate-result.component.html',
  styleUrls: ['./rate-result.component.css']
})
export class RateResultComponent implements OnInit {

  result: number = 0;

  constructor(
    private rateService: RateService
  ) { }

  ngOnInit(): void {
    let rate = this.rateService.rate;
    if (rate) {
      this.result = rate;
    }
  }

}

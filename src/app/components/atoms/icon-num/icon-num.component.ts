import { Component, OnInit, Input } from '@angular/core';

import {
  RateService
} from '../../../services/rate.service';

@Component({
  selector: 'app-icon-num',
  templateUrl: './icon-num.component.html',
  styleUrls: ['./icon-num.component.css']
})
export class IconNumComponent implements OnInit {

  @Input() value: string | number | undefined;

  constructor(
    private rateService: RateService
  ) { }

  ngOnInit(): void {
  }

  handleClick() {
    if (typeof (this.value) === 'number') {
      this.rateService.setRate(this.value);
    }
  }
}

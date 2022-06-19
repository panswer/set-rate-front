import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit {

  @Output() listenSubmit = new EventEmitter();

  ratesValue: number[] = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(e: Event) {
    e.preventDefault();

    this.listenSubmit.emit();
  }
}

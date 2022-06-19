import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-auth-step1',
  templateUrl: './auth-step1.component.html',
  styleUrls: ['./auth-step1.component.css']
})
export class AuthStep1Component implements OnInit {

  @Output() event = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthStep2Component } from './auth-step2.component';

describe('AuthStep2Component', () => {
  let component: AuthStep2Component;
  let fixture: ComponentFixture<AuthStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthStep2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

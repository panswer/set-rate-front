import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconNumComponent } from './icon-num.component';

describe('IconNumComponent', () => {
  let component: IconNumComponent;
  let fixture: ComponentFixture<IconNumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconNumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

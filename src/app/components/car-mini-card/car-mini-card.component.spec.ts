import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarMiniCardComponent } from './car-mini-card.component';

describe('CarMiniCardComponent', () => {
  let component: CarMiniCardComponent;
  let fixture: ComponentFixture<CarMiniCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarMiniCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarMiniCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

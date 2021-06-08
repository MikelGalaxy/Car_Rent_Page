import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarBrowseComponent } from './car-browse.component';

describe('CarBrowseComponent', () => {
  let component: CarBrowseComponent;
  let fixture: ComponentFixture<CarBrowseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarBrowseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

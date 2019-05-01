import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselBasicComponentComponent } from './carousel-basic-component.component';

describe('CarouselBasicComponentComponent', () => {
  let component: CarouselBasicComponentComponent;
  let fixture: ComponentFixture<CarouselBasicComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselBasicComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselBasicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

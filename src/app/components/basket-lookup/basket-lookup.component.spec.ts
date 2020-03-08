import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketLookupComponent } from './basket-lookup.component';

describe('BasketLookupComponent', () => {
  let component: BasketLookupComponent;
  let fixture: ComponentFixture<BasketLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

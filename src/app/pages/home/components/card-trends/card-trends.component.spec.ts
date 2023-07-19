import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTrendsComponent } from './card-trends.component';

describe('CardTrendsComponent', () => {
  let component: CardTrendsComponent;
  let fixture: ComponentFixture<CardTrendsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardTrendsComponent]
    });
    fixture = TestBed.createComponent(CardTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAllAssetsComponent } from './card-all-assets.component';

describe('CardAllAssetsComponent', () => {
  let component: CardAllAssetsComponent;
  let fixture: ComponentFixture<CardAllAssetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardAllAssetsComponent]
    });
    fixture = TestBed.createComponent(CardAllAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

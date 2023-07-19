import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedAssetsCardComponent } from './purchased-assets-card.component';

describe('PurchasedAssetsCardComponent', () => {
  let component: PurchasedAssetsCardComponent;
  let fixture: ComponentFixture<PurchasedAssetsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchasedAssetsCardComponent]
    });
    fixture = TestBed.createComponent(PurchasedAssetsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

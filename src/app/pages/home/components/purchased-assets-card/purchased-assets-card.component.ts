import { Component, Input } from '@angular/core';
import { IPurchasedAsset } from 'src/app/commons/interfaces';

@Component({
  selector: 'app-purchased-assets-card',
  templateUrl: './purchased-assets-card.component.html',
  styleUrls: ['./purchased-assets-card.component.css']
})
export class PurchasedAssetsCardComponent {
  @Input() assets: IPurchasedAsset[] = []
  @Input() assetBalance: number = 0.00;

  teste(){
    this.assetBalance.toFixed(2)
  }
}

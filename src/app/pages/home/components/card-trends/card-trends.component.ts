import { Component, Input } from '@angular/core';
import { ITrend, IAsset } from 'src/app/commons/interfaces';

@Component({
  selector: 'app-card-trends',
  templateUrl: './card-trends.component.html',
  styleUrls: ['./card-trends.component.css']
})
export class CardTrendsComponent {
  @Input() trends: ITrend[] = [];

  currentAssetToBuy: IAsset = {} as IAsset;

  showModalBuy: boolean = false;

  closeModalBuy(){
    this.showModalBuy =false;
  }

  handleShowModalBuy(asset: IAsset){
    this.showModalBuy = true;
    this.currentAssetToBuy = asset;
  }
}

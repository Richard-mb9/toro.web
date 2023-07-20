import { Component } from '@angular/core';
import { IAsset ,IPurchasedAsset,ITrend, IUserPosition } from 'src/app/commons/interfaces';
import { listAssets } from 'src/app/services/assetsApi';
import { getTrends } from 'src/app/services/trends';
import { getPosition } from 'src/app/services/usersApi';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isLoading: boolean = false;


  assets: IAsset[] = [];
  trends: ITrend[] = [];
  test: number = 0;
  

  checkingAccountAmount: string = "0.00";
  consolidated: string = "0.00";
  assetBalance: string = "0.00"
  positions: IPurchasedAsset[] = [];
  

  loadAssetBalance(){
    let total = 0;
    this.positions.forEach((asset)=>{
      total += (parseFloat(asset.current_price.toString())) * asset.quantity;
    })
    this.assetBalance = total.toString();
  }

  async loadAllAssets(){
    const response = await listAssets();
    this.assets = response.data;
  }

  async loadCurrentTrends(){
    const response = await getTrends();
    this.trends = response.data;
  }

  async loadUserPosition(){
    const response = await getPosition();
    this.checkingAccountAmount = response.data.checking_account_amount.toString()
    this.consolidated = response.data.consolidated.toString()
    this.positions = response.data.positions;
    this.loadAssetBalance();
  }

  async ngOnInit(){
    this.isLoading = true;
    try{
      await this.loadAllAssets();
      await this.loadCurrentTrends();
      await this.loadUserPosition()
    }
    catch(e){}
    finally{
      this.isLoading = false;
    }
    
  }
}

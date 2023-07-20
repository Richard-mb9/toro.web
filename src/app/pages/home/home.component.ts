import { Component } from '@angular/core';
import { IAsset ,IPurchasedAsset,ITrend, IUserPosition } from 'src/app/commons/interfaces';
import { Router } from '@angular/router';
import { listAssets } from 'src/app/services/assetsApi';
import { getTrends } from 'src/app/services/trends';
import { getPosition } from 'src/app/services/usersApi';
import { auth } from 'src/app/commons/security';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    private router: Router
  ) { }
  isLoading: boolean = false;


  assets: IAsset[] = [];
  trends: ITrend[] = [];
  test: number = 0;
  

  checkingAccountAmount: number = 0.00;
  consolidated: number = 0;
  assetBalance: number = 0.00
  positions: IPurchasedAsset[] = [];
  

  loadAssetBalance(){
    let total = 0;
    this.positions.forEach((asset)=>{
      total += (parseFloat(asset.current_price.toString())) * asset.quantity;
    })
    this.assetBalance = total;
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
    this.checkingAccountAmount = parseFloat(response.data.checking_account_amount.toString());
    this.consolidated = parseFloat(response.data.consolidated.toString());
    this.positions = response.data.positions;
    this.loadAssetBalance();
  }

  async ngOnInit(){
    if(!auth.isAuthenticated){
      this.router.navigate(['/login']);
    }
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

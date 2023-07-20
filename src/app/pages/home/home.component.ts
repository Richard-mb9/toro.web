import { Component } from '@angular/core';
import { IAsset ,ITrend } from 'src/app/commons/interfaces';
import { listAssets } from 'src/app/services/assetsApi';
import { getTrends } from 'src/app/services/trends';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  assets: IAsset[] = [];

  trends: ITrend[] = [];

  async getAllAssets(){
    const response = await listAssets();
    this.assets = response.data;
  }

  async getCurrentTrends(){
    const response = await getTrends();
    this.trends = response.data;
  }

  async ngOnInit(){
    await this.getAllAssets();
    await this.getCurrentTrends();
  }
}

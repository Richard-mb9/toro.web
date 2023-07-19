import { Component } from '@angular/core';
import { IAsset } from 'src/app/commons/interfaces';

@Component({
  selector: 'app-card-all-assets',
  templateUrl: './card-all-assets.component.html',
  styleUrls: ['./card-all-assets.component.css']
})
export class CardAllAssetsComponent {
  allAssets: IAsset[] = [
    {name: "Banco do Brasil", price: 10.01, symbol: "BDB11"},
    {name: "Amazon", price: 13.51, symbol: "BDB11"},
    {name: "Lojas Americanas", price: 10.60, symbol: "BDB11"},
    {name: "Google", price: 21.89, symbol: "BDB11"},
    {name: "Facebook", price: 10.09, symbol: "BDB11"},
    {name: "Tesla", price: 18.15, symbol: "BDB11"},
    {name: "Casas Bahia", price: 9.68, symbol: "BDB11"},
    {name: "Petrobras", price: 16.21, symbol: "BDB11"},
    {name: "Itaú", price: 15.87, symbol: "BDB11"},
    {name: "Magazine Luiza", price: 8.53, symbol: "BDB11"},
    {name: "Via Varejo", price: 12.92, symbol: "BDB11"},
    {name: "nubank", price: 19.07, symbol: "BDB11"}
  ]
}

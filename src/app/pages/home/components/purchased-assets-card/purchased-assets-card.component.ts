import { Component } from '@angular/core';
import { IPurchasedAsset } from 'src/app/commons/interfaces';

@Component({
  selector: 'app-purchased-assets-card',
  templateUrl: './purchased-assets-card.component.html',
  styleUrls: ['./purchased-assets-card.component.css']
})
export class PurchasedAssetsCardComponent {
  assets: IPurchasedAsset[] = [
    {name: "Banco do Brasil", price: 10.01, symbol: "BDB11", quantity: 2},
    {name: "Amazon", price: 13.51, symbol: "BDB11", quantity: 1},
    {name: "Lojas Americanas", price: 10.60, symbol: "BDB11", quantity: 3},
    {name: "Google", price: 21.89, symbol: "BDB11", quantity: 1},
    {name: "Facebook", price: 10.09, symbol: "BDB11", quantity: 4},
    {name: "Tesla", price: 18.15, symbol: "BDB11", quantity: 1},
    {name: "Casas Bahia", price: 9.68, symbol: "BDB11", quantity: 3},
    {name: "Petrobras", price: 16.21, symbol: "BDB11", quantity: 6},
    {name: "Itaú", price: 15.87, symbol: "BDB11", quantity: 8},
    {name: "Magazine Luiza", price: 8.53, symbol: "BDB11", quantity: 3},
    {name: "Via Varejo", price: 12.92, symbol: "BDB11", quantity: 2},
    {name: "nubank", price: 19.07, symbol: "BDB11", quantity: 3}
  ]
}

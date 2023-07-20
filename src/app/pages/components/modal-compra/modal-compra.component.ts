import { Component, Input, Output, EventEmitter } from '@angular/core';
import { isAxiosError } from 'axios';
import { IAsset } from 'src/app/commons/interfaces';
import { createOrder } from 'src/app/services/orders';

@Component({
  selector: 'app-modal-compra',
  templateUrl: './modal-compra.component.html',
  styleUrls: ['./modal-compra.component.css']
})
export class ModalCompraComponent {
  isLoading: boolean = false;
  @Input() show: boolean = false;
  @Output() close: EventEmitter<any>  = new EventEmitter();

  @Input() asset: IAsset = {} as IAsset;

  textAlert: string = "";

  quantity: number | string = '';

  setQuantity(v: string){
    this.quantity = parseInt(v);
  }

  handleClose(){
    this.close.emit()
  }

  async buy(){
    const data = {
      symbol: this.asset.symbol,
      amount: parseInt(this.quantity.toString()),
    }
    try{
      this.isLoading = true;
      await createOrder(data);
      window.location.reload();
    }
    catch(error){
      if(isAxiosError(error)){
        if(error.response?.status === 422){
         this.textAlert = "Saldo insuficiente"
        }
        else if(error.response?.status){
          if(error.response?.status >= 400 && error.response?.status < 500){
            this.textAlert = "por favor, tente novamente"
          }
          else if(error.response?.status >= 500){
            this.textAlert = "Tivemos um erro, tente Novamente mais tarde"
          }
          
        }
      }
    } finally{
      this.isLoading = false;
    }
    
    
  }

}

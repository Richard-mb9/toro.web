import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  marginTopAccountData = "-160px"
  textButtonShowAccountData = "Exibir dados da conta"

  setShowAccountData(){

    if(this.marginTopAccountData === "60px"){
      this.marginTopAccountData = "-160px"
      this.textButtonShowAccountData = "Exibir dados da conta"
    } else{
      this.marginTopAccountData = "60px"
      this.textButtonShowAccountData = "Ocultar dados da conta"
    }
  }
}

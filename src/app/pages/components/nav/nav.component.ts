import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'src/app/commons/security';

import { getAccountData } from 'src/app/services/usersApi';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(
      private router: Router
  ) { }

  isLoading: boolean = false;

  name: string = "";
  branch: string = "";
  account: string = "";
  bank: string = "352"

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

  async loadAccountData(){
    this.isLoading = true;
    try{
      const response = await getAccountData();
      this.branch = response.data.branch;
      this.account = response.data.account;
      this.name = response.data.name;
    }
    catch(e){}
    finally{
      this.isLoading = false;
    }
  }

  logOut(){
    auth.clear();
    this.router.navigate(['/login']);
  }

  async ngOnInit(){
    await this.loadAccountData();
    
  }
}

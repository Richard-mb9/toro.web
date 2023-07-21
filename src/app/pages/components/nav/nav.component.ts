import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {isAxiosError} from 'axios';

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

  withAccountData = "0px"
  textButtonShowAccountData = "Exibir dados da conta"

  setShowAccountData(){

    if(this.withAccountData === "150px"){
      this.withAccountData = "0px"
      this.textButtonShowAccountData = "Exibir dados da conta"
    } else{
      this.withAccountData = "150px"
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
    catch(error){
      if(isAxiosError(error)){
        if(error.response?.status === 401){
          auth.clear();
          this.router.navigate(['/login']);
        }
      }
    }
    finally{
      this.isLoading = false;
    }
  }

  logOut(){
    auth.clear();
    window.location.reload();
  }

  async ngOnInit(){
    await this.loadAccountData();

  }
}

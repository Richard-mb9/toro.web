import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { isAxiosError } from 'axios';
import { auth } from 'src/app/commons/security';
import { authenticate } from 'src/app/services/authApi';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent {
  constructor(
    private router: Router
  ) { }

    ngOnInit(){
      if(auth.isAuthenticated){
        this.router.navigate(['']);
      }
    }

  isLoading: boolean = false;
  requestErrorAlert: string = ''
  email: string = '';
  emailError: string = ''
  password: string = '';

  setEmail(v: string){this.email = v;}
  setPassword(v: string){this.password = v;}


  isValidEmail():boolean{
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
    if(!regex.test(this.email)){
      this.emailError = "Email Invalido";
      return false
    }
    this.emailError = ""
    return true;
  }

  async send(){
    if(this.isValidEmail()){
      const data = {
        email: this.email,
        password: this.password
      }
      try{
        this.isLoading = true;
        const response = await authenticate(data);
        const accessToken = response.data.access_token
        auth.setToken(accessToken)
        window.location.reload();
      } catch (error){
        if(isAxiosError(error)){
          if(error.response?.status === 401){
            this.requestErrorAlert = "Credenciais Invalidas"
          }
          else if(error.response?.status){
            if(error.response?.status >= 400 && error.response?.status < 500){
              this.requestErrorAlert = "Verifique se os seus dados estão corretos"
            }
            else if(error.response?.status >= 500){
              this.requestErrorAlert = "Tivemos um erro, tente Novamente mais tarde"
            }
            
          }
        }
      }
      finally{
        this.isLoading = false;
      }

    }
    
  }

}

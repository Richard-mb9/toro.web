import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {isAxiosError} from 'axios';
import { auth } from 'src/app/commons/security';
import { authenticate } from 'src/app/services/authApi';

import { createUser } from 'src/app/services/usersApi';


@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.css']
})
export class RegisterCardComponent {
  constructor(
      private router: Router
  ) { }

  async ngOnInit(){
    if(auth.isAuthenticated){
      this.router.navigate(['']);
    }
  }

  requestErrorAlert = ''

  isLoading: boolean = false;

  name: string = "";
  nameError = "";

  email: string = "";
  emailError = "";

  password: string = "";
  passwordError = "";

  confirmPassword: string = "";
  confirmPasswordError = "";

  cpf: string = "";
  cpfError = "";


  setName(v: string){this.name = v}
  setEmail(v: string){this.email = v;}
  setPassword(v: string){this.password = v;}
  setConfirmPassword(v: string){this.confirmPassword = v;}
  setCpf(v: string){this.cpf = v;}


  validatePassword(): boolean{
    if(this.password.length < 8){
      this.passwordError = "A Senha deve conter pelo menos 8 digitos"
      return false;
    }
    this.passwordError = ""
    if(this.password !== this.confirmPassword){
      this.confirmPasswordError = "A Confimação de senha deve ser igual a senha"
      return false;
    }
    this.confirmPasswordError = ""
    return true;
  }

  validateEmail():boolean{
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
    if(!regex.test(this.email)){
      this.emailError = "Email Invalido";
      return false
    }
    this.emailError = ""
    return true;
  }

  validateCPF(): boolean{
    if(this.cpf.length < 10 || this.cpf.length > 12){
      this.cpfError = "CPF Invalido";
      return false;
    }
    this.cpfError = ""
    return true;
  }

  validate(){
    let isValid = true;
    if(!this.name.length){
      isValid = false;
      this.nameError = "Campo Obrigatorio";
    } else {this.nameError = "";}

    if(!this.validateEmail()){
      isValid = false;
    }
    if(!this.validatePassword()){
      isValid = false;
    }
    if(!this.validateCPF()){
      isValid = false
    }
    return isValid;

  }

  async save(){
    if(this.validate()){
      this.isLoading = true;
      const data = {
        name: this.name,
        cpf: this.cpf,
        email: this.email,
        password: this.password
      }
      try{
        await createUser(data);
        try{
          const response = await authenticate({email: this.email ,password: this.password})
          const accessToken = response.data.access_token
          auth.setToken(accessToken)
          window.location.reload();
        } catch(error){
          this.router.navigate(['/login']);
        }
        
      }catch (error){
        if(isAxiosError(error)){
          if(error.response?.status === 409){
            this.requestErrorAlert = "Email ou CPF ja cadastro"
          }
          else if(error.response?.status === 400){
            this.requestErrorAlert = "Verifique se os seus dados estão corretos"
          }
        }
      }
      finally{
        this.isLoading = false;
      }
      
      this.isLoading = false;
    }
  }
}

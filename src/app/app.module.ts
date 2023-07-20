import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginCardComponent } from './pages/login/components/login-card/login-card.component';
import { RegisterCardComponent } from './pages/register/components/register-card/register-card.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { CardInfoComponent } from './pages/home/components/card-info/card-info.component';
import { CardTrendsComponent } from './pages/home/components/card-trends/card-trends.component';
import { NavComponent } from './pages/components/nav/nav.component';
import { CardAllAssetsComponent } from './pages/home/components/card-all-assets/card-all-assets.component';
import { CardAccountComponent } from './pages/home/components/card-account/card-account.component';
import { PurchasedAssetsCardComponent } from './pages/home/components/purchased-assets-card/purchased-assets-card.component';
import { InputComponent } from './pages/components/input/input.component';
import { LoadingComponent } from './pages/components/loading/loading.component';
import { ModalCompraComponent } from './pages/components/modal-compra/modal-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginCardComponent,
    RegisterComponent,
    RegisterCardComponent,
    HomeComponent,
    CardInfoComponent,
    CardTrendsComponent,
    NavComponent,
    CardAllAssetsComponent,
    CardAccountComponent,
    PurchasedAssetsCardComponent,
    InputComponent,
    LoadingComponent,
    ModalCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ListOfRequestComponent } from './list-of-request/list-of-request.component';
import {AuthService} from './_services/auth.service';
import {ErrorInterceptorProvider} from './_services/error.interceptor';
import { RegisterComponent } from './register/register.component';
import { UnauthComponent } from './unauth/unauth.component';
import {AccountComponent} from './account/account.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CompetencyComponent} from './competency/competency.component';
import {RMGComponent} from './rmg/rmg.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ListOfRequestComponent,
    RegisterComponent,
    UnauthComponent,
    AccountComponent,
    CompetencyComponent,
    RMGComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

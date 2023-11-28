import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from "@angular/forms";
import {SuccessRegisterComponent} from "./success-register/success-register.component";
import { MessageComponent } from './components/message/message.component';
import { MajorityDirective } from './directives/majority.directive';
import {HttpClientModule} from "@angular/common/http";
import { ValidatingCepDirective } from './directives/validating-cep.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    SuccessRegisterComponent,
    MessageComponent,
    MajorityDirective,
    ValidatingCepDirective
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

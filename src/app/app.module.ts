import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import { ListaComponent } from './lista/lista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask'
import { CpfPipe } from './pipes/cpf.pipe';
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListaComponent,
    CpfPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatRadioModule,
    NgxMaskModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt',
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }

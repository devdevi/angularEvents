import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Include the Auth Service + Auth Module
import { FormioAppConfig } from 'angular-formio';
import { FormioAuthService, FormioAuthConfig } from 'angular-formio/auth';
import { AuthConfig, AppConfig } from '../config';
import { AuthModule } from './auth/auth.module';

// Importamos RouteModule

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
// Modulo de eventos
import { EventModule } from './event/event.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    // Definimos la  ruta del Home
    // Angula pone todo dentro de AppRoot, todo lo que hagamos lo va a poner  en app-root o donde le digamos que lo ponga
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'auth',
        loadChildren: () => AuthModule
      },
      {
        path: 'event',
        loadChildren: () => EventModule
      }
    ])

  ],
  // aquí instanciamos servicios, provedores,
  providers: [
    FormioAuthService,
    {provide: FormioAuthConfig, useValue: AuthConfig},
    {provide: FormioAppConfig, useValue: AppConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

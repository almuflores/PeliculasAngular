import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PeliculaService } from '../auth/services/pelicula.service';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { ListComponent } from './list/list.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { FavComponent } from './fav/fav.component';




@NgModule({
  declarations: [HomeComponent, LoginComponent, RegisterComponent,PeliculaComponent, ListComponent, FavComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  providers: [
    PeliculaService
  ],
})
export class HomeModule { }

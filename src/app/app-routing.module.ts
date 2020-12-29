import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: '',
  redirectTo: '/login',
  pathMatch: 'full',
  },

  { path: 'home',
  loadChildren:() => import('./home/home.module').then((m) => m.HomeModule),
  },
  { path: 'login',
  loadChildren:() => import('./auth/login/login.module').then((m) => m.LoginModule),
  },
  { path: 'register',
  loadChildren:() => import('./auth/register/register.module').then((m) => m.RegisterModule),
  },
  
  { path: 'list',
  loadChildren:() => import('./home/list/list.module').then((m) => m.ListModule),
  },
  { path: 'pelicula',
  loadChildren:() => import('./home/pelicula/pelicula.module').then((m) => m.PeliculaModule),
  },
  { path: 'fav',
  loadChildren:() => import('./home/fav/fav.module').then((m) => m.FavModule),
  },
  

  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
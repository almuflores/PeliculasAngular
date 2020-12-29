import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavComponent } from './fav.component';

const routes: Routes = [{ path: '', component: FavComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavRoutingModule { }

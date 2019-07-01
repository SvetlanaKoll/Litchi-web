import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainAppComponent } from './main-app/main-app.component';
import { DressesAppComponent } from './dresses-app/dresses-app.component';
import { SelectedDressAppComponent } from './selected-dress-app/selected-dress-app.component';
import { MobMenuAppComponent } from './mob-menu-app/mob-menu-app.component';

const routes: Routes = [
  {path: '' , component: MainAppComponent},
  {path: 'dresses' , component: DressesAppComponent},
  {path: 'item/:id' , component: SelectedDressAppComponent},
  {path: 'menu' , component: MobMenuAppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

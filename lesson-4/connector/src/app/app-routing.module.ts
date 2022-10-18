import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ItemComponent } from './pages/item/item.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'item', component: ItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

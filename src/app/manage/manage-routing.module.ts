import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { Page2Component } from '../page2/page2.component';
import { ManageComponent } from './manage.component';

const routes: Routes = [
  { 
    path:'',
    component:ManageComponent,
    children:[
      {path:'home',component:HomeComponent},
      {path:'page2',component:Page2Component},
      {path:'',redirectTo:'home',pathMatch:'full'}]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }

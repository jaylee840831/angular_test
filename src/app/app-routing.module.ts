import { NotfoundComponent } from './notfound/notfound.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    //模組化並延遲載入
    path:'login',
    loadChildren:()=>import('./login/login.module').then(m=>m.LoginModule)
  },
  { 
    //模組化並延遲載入
    path:'manage',
    loadChildren:()=>import('./manage/manage.module').then(m=>m.ManageModule)
  },
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { ManageComponent } from './manage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { HelloComponent } from '../hello/hello.component';
import { VoteComponent } from '../vote/vote.component';
import { HomeComponent } from '../home/home.component';
import { MenuComponent } from '../menu/menu.component';
import { Page2Component } from '../page2/page2.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HelloComponent,
    VoteComponent,
    HomeComponent,
    MenuComponent,
    Page2Component,
    ManageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ManageRoutingModule
  ]
})
export class ManageModule { }

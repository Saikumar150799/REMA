import { ApplicationPageModule } from './../../ApplicationPageModule';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AvatarModule } from 'ngx-avatar';

import { IonicModule } from '@ionic/angular';

import { TicketDetailsPage } from './ticket-details.page';

const routes: Routes = [
  {
    path: '',
    component: TicketDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvatarModule,
    ApplicationPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TicketDetailsPage]
})
export class TicketDetailsPageModule { }

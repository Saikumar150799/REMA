import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WorkPermitPage } from './work-permit.page';
import { ApplicationPageModule } from '../../ApplicationPageModule';

const routes: Routes = [
  {
    path: '',
    component: WorkPermitPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ApplicationPageModule
  ],
  declarations: [WorkPermitPage]
})
export class WorkPermitPageModule {}

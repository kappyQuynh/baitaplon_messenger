import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DanhbaPageRoutingModule } from './danhba-routing.module';

import { DanhbaPage } from './danhba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DanhbaPageRoutingModule
  ],
  declarations: [DanhbaPage]
})
export class DanhbaPageModule {}

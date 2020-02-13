import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DanhbaPage } from './danhba.page';

const routes: Routes = [
  {
    path: '',
    component: DanhbaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DanhbaPageRoutingModule {}

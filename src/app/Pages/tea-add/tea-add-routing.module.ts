import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeaAddPage } from './tea-add.page';

const routes: Routes = [
  {
    path: '',
    component: TeaAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeaAddPageRoutingModule {}

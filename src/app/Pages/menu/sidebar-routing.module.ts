import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidebarPage } from './sidebar.page';

const routes: Routes = [
  {
    path: 'menu',
    component: SidebarPage,
    children:[
      {
        path: 'tea',
        loadChildren: () => import('../tea/tea.module').then( m => m.TeaPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidebarPageRoutingModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InicioPageModule } from './Pages/inicio/inicio.module';
import { HomePageModule } from './Pages/home/home.module';
import { FavoritosPageModule } from './Pages/favoritos/favoritos.module';
import { TeaAddPageModule } from './Pages/tea-add/tea-add.module';
import { ConfigPageModule } from './Pages/config/config.module';

const routes: Routes = [
  {
    
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => InicioPageModule  
  },
  {
    path: 'home',
    loadChildren: () => HomePageModule
  },
  {
    path: 'favoritos',
    loadChildren: () => FavoritosPageModule
  },
  {
    path: 'config',
    loadChildren: () => ConfigPageModule
  },
  {
    path: 'tea-add',
    loadChildren: () => TeaAddPageModule
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

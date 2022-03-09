import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InicioPageModule } from './Pages/inicio/inicio.module';
import { HomePageModule } from './Pages/home/home.module';
import { FavoritosPageModule } from './Pages/favoritos/favoritos.module';

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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

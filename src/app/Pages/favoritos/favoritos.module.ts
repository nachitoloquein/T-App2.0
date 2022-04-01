import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritosPageRoutingModule } from './favoritos-routing.module';

import { FavoritosPage } from './favoritos.page';
import {TeaCardComponent  } from './../../Components/tea-card/tea-card.component';

import { PopUpComponent } from 'src/app/Components/pop-up/pop-up.component'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritosPageRoutingModule
  ],
  declarations: [FavoritosPage, TeaCardComponent, PopUpComponent],
  entryComponents: [PopUpComponent]
})
export class FavoritosPageModule {}

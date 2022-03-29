import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeaAddPageRoutingModule } from './tea-add-routing.module';

import { TeaAddPage } from './tea-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeaAddPageRoutingModule
  ],
  declarations: [TeaAddPage]
})
export class TeaAddPageModule {}

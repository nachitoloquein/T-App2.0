import { Component, OnInit } from '@angular/core';
import { Tea } from 'src/app/Model/tea.model';
import { TeaService } from 'src/app/Services/tea.service';
import { PopoverController } from '@ionic/angular';
import { PopUpComponent } from './../../Components/pop-up/pop-up.component'

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  favoritos: Tea[];

  constructor(private teaService: TeaService, public popoverController: PopoverController) {}

  ngOnInit() {
    this.favoritos = this.teaService.getTeas().filter((tea) => {
      return tea.favorito;
    });
  }

  async abrirPopover(ev: any){
    const popover = await this.popoverController.create({
      component: PopUpComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();
   }

}

import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { TeaService } from 'src/app/Services/tea.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent implements OnInit {


  constructor(private popoverController: PopoverController, private teaService: TeaService) { }

  ngOnInit() {}

  ordenar(){
  }

  dismissPopover() {
    this.popoverController.dismiss();
  }
}

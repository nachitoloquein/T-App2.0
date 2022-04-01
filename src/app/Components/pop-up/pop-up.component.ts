import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {}

  dismissPopover() {
    this.popoverController.dismiss();
  }
}

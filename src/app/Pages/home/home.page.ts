import { Component, OnInit } from '@angular/core';
import { Tea } from 'src/app/Model/tea.model';
import { TeaService } from 'src/app/Services/tea.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  teas: Tea[];

  constructor(private teaService: TeaService) {}

  ngOnInit() {
    this.teas = this.teaService.getTeas();
  }

}

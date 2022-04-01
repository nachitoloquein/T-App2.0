import { Component, OnInit } from '@angular/core';
import { Tea } from 'src/app/Model/tea.model';
import { TeaService } from 'src/app/Services/tea.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  teas: Tea[];

  constructor(private teaService: TeaService) {}

  ngOnInit() {
    this.teas = this.teaService.getTeas().filter((tea) => {
      return tea.favorito;
    });
  }

}

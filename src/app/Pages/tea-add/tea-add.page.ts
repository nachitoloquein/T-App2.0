import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeaService } from '../../Services/tea.service'

@Component({
  selector: 'app-tea-add',
  templateUrl: './tea-add.page.html',
  styleUrls: ['./tea-add.page.scss'],
})
export class TeaAddPage implements OnInit {

  nombre: string;
  dificultad: number;
  foto: string;
  ingredientes: string[];
  instrucciones: string[];
  temperatura: string;
  tipoTe: string;

  constructor(private teaService: TeaService, private router: Router) { }

  ngOnInit() {
  }

  agregarTe(){
      this.teaService.addTea(
      this.nombre,
      this.dificultad,
      this.foto,
      this.temperatura,
      this.ingredientes,
      this.instrucciones,
      this.tipoTe
    );
    this.limpiarParametros();
    this.router.navigateByUrl('home');
  }
  limpiarParametros(){
    this.nombre="";
    this.dificultad=0;
    this.foto="";
    this.temperatura="Frío";
    this.ingredientes=[];
    this.instrucciones=[];
    this.tipoTe= "Té Rojo";
  }

}

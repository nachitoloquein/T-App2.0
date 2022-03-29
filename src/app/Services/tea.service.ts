import { Injectable } from '@angular/core';
import { Tea } from '../Model/tea.model';

@Injectable({
  providedIn: 'root'
})
export class TeaService {

  private teas: Tea[] =[  
    { 
        id: 1,
        nombre: "Té De Canela",
        dificultad: 1,
        foto: "https://cdn.kiwilimon.com/articuloimagen/30281/28542.jpg",
        temperatura: "Caliente",
        ingredientes:["Canela", "Bolsa de té", "Agua", "Azúcar"],
        instrucciones: ["Ingresar 100 gr. de canela en la taza","Introducir la bolsa de té","En movimientos circulares, vertir el agua hirbiendo","Meter azúcar a gusto"],
        tipoTe: "Té Negro",
        favorito: false
    },
    {
        id: 2,
        nombre : "Té Rojo",
        dificultad: 1.5,
        foto: "https://www.objetivobienestar.com/uploads/s1/25/17/8/te-rojo-25178.jpg",
        temperatura: "Caliente",
        ingredientes:["Hierba de té rojo", "Agua", "Azúcar"],
        instrucciones: ["Ingresar 100 gr. de canela en la taza","Introducir la bolsa de té","En movimientos circulares, vertir el agua hirbiendo","Meter azúcar a gusto"],
        tipoTe: "Té Rojo",
        favorito: false
    },
    {
        id: 3,
        nombre : "English Tea",
        dificultad: 2,
        foto: "https://www.arla.com/4a605a/globalassets/arla-global/milk/open-your-senses/tea/images/open_your_senses_tea-split_deck-tea-latte.jpg?preset=half-mobile",
        temperatura: "Caliente",
        ingredientes:["Té negro", "Agua", "Azúcar"],
        instrucciones: ["Ingresar 100 gr. de canela en la taza","Introducir la bolsa de té","En movimientos circulares, vertir el agua hirbiendo","Meter azúcar a gusto"],
        tipoTe: "Té Negro",
        favorito: false
    },
    {
        id: 4,
        nombre : "Té Verde Chino",
        dificultad: 2,
        foto: "https://www.tododisca.com/wp-content/uploads/2021/03/Te-verde-antioxidante.jpg",
        temperatura: "Caliente",
        ingredientes:["Hierba de té verde", "Agua", "Azúcar"],
        instrucciones: ["Ingresar 100 gr. de canela en la taza","Introducir la bolsa de té","En movimientos circulares, vertir el agua hirbiendo","Meter azúcar a gusto"],
        tipoTe: "Té Verde",
        favorito: false
    },
    {
        id: 5,
        nombre : "Bubble Tea",
        dificultad: 4.5,
        foto: "https://www.honestfoodtalks.com/wp-content/uploads/2021/08/Okinawa-milk-tea-recipe-using-kokuto-500x500.jpeg",
        temperatura: "Frío",
        ingredientes:["Droga", "Agua", "Azúcar"],
        instrucciones: ["Ingresar 100 gr. de canela en la taza","Introducir la bolsa de té","En movimientos circulares, vertir el agua hirbiendo","Meter azúcar a gusto"],
        tipoTe: "Té Negro",
        favorito: false
    }


]  
  constructor() { }

  getTeas(): Tea[] {
    return [...this.teas];
  }

  getTea(teaId: number){
    return {
      ...this.teas.find(tea => {
        return tea.id === teaId;
      })
    };
  }

  deleteTea(teaId: number){
    this.teas = this.teas.filter(tea => {
      return tea.id !== teaId;
    });
  }

  addTea(nombre: string, dificultad: number, foto: string, temperatura: string, ingredientes: string[], instrucciones: string[], tipoTe: string)
  {
    this.teas.push({
      id: this.teas.length,
      nombre,
      dificultad,
      foto,
      temperatura,
      ingredientes,
      instrucciones,
      tipoTe,
      favorito: false
    });
  }

  likeUnlike(tea:any, like: boolean)
  {
     tea.favorito = like;
  }

}

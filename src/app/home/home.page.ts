import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
   public carros;
   /*
   constructor(){
    this.carro = [
    {"nome":"Fusca"},
    {"nome":"Gol"},
    {"nome":"Astra"},
    ]
   }*/
   ngOnInit():void {
     this.carros = [
      {
        "nome":"Fusca",
        "preco": 2000
      },
      {
        "nome":"Gol",
        "preco": 3000
      },
      {
        "nome":"Astra",
        "preco": 4000
      },
      ]
   }
}

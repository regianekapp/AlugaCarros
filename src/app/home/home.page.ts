import { Component, OnInit } from '@angular/core';
import { Carro } from '../modelos/carro';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; //Import HTTPCLIENT
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  
  public carros: Carro[];

    constructor(public http:HttpClient,
      private loadingCtrl:LoadingController, //Importa a biblioteca loading
      private alertCtrl:AlertController
      ){}

  async ngOnInit(){ //async deixa a exibição assincrona
    

    const loading = await this.loadingCtrl.create({
      message:'Aguarde enquantos os carros são carregados !!!'
    });

    await loading.present(); //Exibi na tela o loading

    //Pode aparecer antes mesmo do loading aparecer
    this.http.get<Carro[]>('http://localhost:8080/api/carro/listaTodos')
    .subscribe(
      (carros)=>{
        this.carros = carros;
      },
      async (err:HttpErrorResponse)=>{
        console.log('Deu Erro '+ err.status);
        const al = await this.alertCtrl.create({
          header:'Erro',
          message:'Erro ao carregar pagina',
          buttons: [{text: 'OK'}]
        });
        await al.present();
      }
    ).add(
      ()=>{
        loading.dismiss(); //Desliga o loading da tela se já estiver carregado os arquivos
      }
    )
  }
}

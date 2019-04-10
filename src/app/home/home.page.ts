import { Component, OnInit } from '@angular/core';
import { Carro } from '../modelos/carro';
import { HttpErrorResponse } from '@angular/common/http'; //Import HTTPCLIENT (HttpClient) removido
import { LoadingController, AlertController, NavController } from '@ionic/angular';
import {CarrosService} from '../providers/carros.service';
import { NavComponent } from '@ionic/core';
import { NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  
  public carros: Carro[];

    constructor(private loadingCtrl:LoadingController, //Importa a biblioteca loading
      private alertCtrl:AlertController,
      private carrosService: CarrosService,
      private navCtrl: NavController){}  //injetar navcontrole

  async ngOnInit(){ //async deixa a exibição assincrona
    
    const loading = await this.loadingCtrl.create({
      message:'Aguarde enquantos os carros são carregados !!!'
    });

    await loading.present(); //Exibi na tela o loading
  this.carrosService.lista()
    //Pode aparecer antes mesmo do loading aparecer
    //this.http.get<Carro[]>('http://localhost:8080/api/carro/listaTodos')
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

  selecionaCarro(carro: Carro){
    console.log("Carro selecionado: "+ carro.nome);  //vai para home.page.html

    let extras: NavigationExtras = {
      queryParams:{
        carroSelecionado: JSON.stringify(carro)
      }
    }

    this.navCtrl.navigateForward(['escolha'], extras); //vai para a pagina nova criada escolha
  }

}

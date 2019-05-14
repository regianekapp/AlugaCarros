import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { query } from '@angular/core/src/render3';
import { Carro } from '../modelos/carro';
import { Acessorio } from '../modelos/Acessorio';


@Component({
  selector: 'app-escolha',
  templateUrl: './escolha.page.html',
  styleUrls: ['./escolha.page.scss'],
})
export class EscolhaPage implements OnInit {
private carro : Carro //declarar carro para poder usa-lo na pagina
private acessorios : Acessorio[];
private precoTotal : number; 

  constructor(private navCtrl: NavController, 
    private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.queryParams.
    subscribe(params => {
      this.carro = <Carro>JSON.parse(params["carroSelecionado"]);
    console.log("O carro que chegou na página de escolha é: " + this.carro.nome);
    })

    this.precoTotal = this.carro.preco;

    this.acessorios = [
      {nome:'Freios ABS', preco: 800},
      {nome:'Ar-Condicionado', preco: 500},
      {nome:'MP3 Player', preco: 1000},
    ]
    
  }


  voltar(){
    this.navCtrl.back();
  }

  atualizaTotal(ativo:boolean, acessorio: Acessorio){
    ativo ? this.precoTotal += acessorio.preco : this.precoTotal -= acessorio.preco;

    /* acima reescrevendo o codigo da melhor forma
    if (ativo){
    this.precoTotal += acessorio.preco
    }else{
      this.precoTotal -= acessorio.preco
    }
    */ 
  }

  avancaCadastro(){
    let extras: NavigationExtras = {
      queryParams:{
        carroSelecionado: JSON.stringify(this.carro),
        precoTotal: this.precoTotal
      }
    }

    this.navCtrl.navigateForward(['cadastro'], extras);
  }

}

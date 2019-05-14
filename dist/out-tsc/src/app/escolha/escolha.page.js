import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
var EscolhaPage = /** @class */ (function () {
    function EscolhaPage(navCtrl, activateRoute) {
        this.navCtrl = navCtrl;
        this.activateRoute = activateRoute;
    }
    EscolhaPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.queryParams.
            subscribe(function (params) {
            _this.carro = JSON.parse(params["carroSelecionado"]);
            console.log("O carro que chegou na página de escolha é: " + _this.carro.nome);
        });
        this.acessorios = [
            { nome: "Freios ABS", preco: 800 },
            { nome: "Ar-Condicionado", preco: 1000 },
            { nome: "MP3 Player", preco: 500 },
        ];
    };
    // ngOnInit(){
    //   let acessorios[
    //   ]
    // }
    EscolhaPage.prototype.voltar = function () {
        this.navCtrl.back();
    };
    EscolhaPage = tslib_1.__decorate([
        Component({
            selector: 'app-escolha',
            templateUrl: './escolha.page.html',
            styleUrls: ['./escolha.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            ActivatedRoute])
    ], EscolhaPage);
    return EscolhaPage;
}());
export { EscolhaPage };
//# sourceMappingURL=escolha.page.js.map
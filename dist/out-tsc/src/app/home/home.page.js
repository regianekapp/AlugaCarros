import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Import HTTPCLIENT
import { LoadingController, AlertController } from '@ionic/angular';
var HomePage = /** @class */ (function () {
    function HomePage(http, loadingCtrl, //Importa a biblioteca loading
    alertCtrl) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    HomePage.prototype.ngOnInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Aguarde enquantos os carros são carregados !!!'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent(); //Exibi na tela o loading
                        //Pode aparecer antes mesmo do loading aparecer
                        this.http.get('http://localhost:8080/api/carro/listaTodos')
                            .subscribe(function (carros) {
                            _this.carros = carros;
                        }, function (err) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var al;
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log('Deu Erro ' + err.status);
                                        return [4 /*yield*/, this.alertCtrl.create({
                                                header: 'Erro',
                                                message: 'Erro ao carregar pagina',
                                                buttons: [{ text: 'OK' }]
                                            })];
                                    case 1:
                                        al = _a.sent();
                                        return [4 /*yield*/, al.present()];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }).add(function () {
                            loading.dismiss(); //Desliga o loading da tela se já estiver carregado os arquivos
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            LoadingController,
            AlertController])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map
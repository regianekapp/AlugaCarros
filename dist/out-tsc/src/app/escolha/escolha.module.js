import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EscolhaPage } from './escolha.page';
var routes = [
    {
        path: '',
        component: EscolhaPage
    }
];
var EscolhaPageModule = /** @class */ (function () {
    function EscolhaPageModule() {
    }
    EscolhaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [EscolhaPage]
        })
    ], EscolhaPageModule);
    return EscolhaPageModule;
}());
export { EscolhaPageModule };
//# sourceMappingURL=escolha.module.js.map
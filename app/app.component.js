"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var button_1 = require('@angular2-material/button');
var card_1 = require('@angular2-material/card');
var toolbar_1 = require('@angular2-material/toolbar');
var sidenav_1 = require('@angular2-material/sidenav');
var icon_1 = require('@angular2-material/icon');
var module_component_1 = require('./module/module.component');
var login_component_1 = require('./security/login/login.component');
var security_service_1 = require("./security/security.service");
var AppComponent = (function () {
    function AppComponent(securityService) {
        this.securityService = securityService;
        this.tipo = 'side';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.isGuest$ = this.securityService.isGuest$;
    };
    AppComponent.prototype.printValue = function () {
        console.log('value is: ', this.isGuest$);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            directives: [login_component_1.LoginForm, button_1.MdButton, card_1.MdCard, icon_1.MdIcon, toolbar_1.MdToolbar, sidenav_1.MD_SIDENAV_DIRECTIVES, module_component_1.MyModule],
            providers: [icon_1.MdIconRegistry, security_service_1.SecurityService]
        }), 
        __metadata('design:paramtypes', [security_service_1.SecurityService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
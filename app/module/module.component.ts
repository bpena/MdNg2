import {Component, OnInit} from "@angular/core";
import {MdButton} from "@angular2-material/button";
import {MdCard} from "@angular2-material/card";
import {MdToolbar} from "@angular2-material/toolbar";
import {MD_SIDENAV_DIRECTIVES} from "@angular2-material/sidenav";
import {MdIcon, MdIconRegistry} from "@angular2-material/icon";
import {LoginForm} from "../security/login/login.component";
import {SecurityService} from "../security/security.service";
import {Session} from "../security/session.interface";

@Component({
    selector:       'module-component',
    templateUrl:    __dirname + '/module.component.html',
    directives:     [LoginForm, MdButton, MdCard, MdIcon, MdToolbar, MD_SIDENAV_DIRECTIVES],
    providers:      [MdIconRegistry, SecurityService]
})
export class ModuleComponent implements OnInit {
    public tipo:string = 'side';
    public session: Session;
    constructor(private securityService : SecurityService) {
    }

    ngOnInit() {
      // this.securityService.isGuest$.subscribe(value => this.isGuest = value);
        this.session = this.securityService.session;
    }

    printValue() {
        console.log("value: ", this.session);
        console.log("service value: ", this.securityService.session);
        this.securityService.logout();  
    }

}


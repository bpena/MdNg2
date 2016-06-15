import {Component} from '@angular/core';
import {MdButton} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MdToolbar} from '@angular2-material/toolbar';
import {SecurityService} from "../security.service";

@Component({
    selector: 'login-form',
    templateUrl: __dirname + '/login.component.html',
    styles: ['.login-form{width: 200px;} .login button {float: rigth;}'],
    directives: [MdButton, MD_CARD_DIRECTIVES, MD_INPUT_DIRECTIVES, MdToolbar],
    providers: [SecurityService]
})

export class LoginForm {
    public username: string;
    public password: string;

    constructor(private securityService: SecurityService) { }

    login() {
        if (this.securityService.login(this.username, this.password) != null)
            console.log('pude entrar');
        else
            console.log('no pude entrar');
    }
}

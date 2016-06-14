import {Component} from '@angular/core';
import {MdButton} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MdToolbar} from '@angular2-material/toolbar';
import {LoginService} from "./login.service";

@Component({
    selector: 'login-form',
    templateUrl: __dirname + '/login.component.html',
    directives: [MdButton, MD_CARD_DIRECTIVES, MD_INPUT_DIRECTIVES, MdToolbar],
    providers: [LoginService]
})

export class LoginForm {
    public username: string;
    public password: string;

    constructor(private loginService: LoginService) { }

    login() {
        if (this.loginService.login(this.username, this.password))
            console.log('pude entrar');
        else
            console.log('no pude entrar');
    }
}

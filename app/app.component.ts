import {Component} from "@angular/core";
import {RouteConfig, RouterLink, Router} from '@angular/router-deprecated'
import {ModuleComponent} from "./module/module.component";
import {LoginForm} from "./security/login/login.component";


@Component({
    selector:       'my-app',
    templateUrl:    './app/app.component.html',
    directives:     [ModuleComponent]
})

@RouteConfig([
    {path: '/', redirectTo: ['/Home']},
    {path: '/home', component: ModuleComponent, as: 'Home'},
    {path: '/home', component: LoginForm, as: 'Login'}
])

export class AppComponent {

    constructor() {}

}


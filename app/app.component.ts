import { Component } from '@angular/core';
import { MdButton } from '@angular2-material/button';
import { MdCard } from '@angular2-material/card';
import { MdToolbar } from '@angular2-material/toolbar';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MyModule } from './module/module.component';
import { LoginForm } from './security/login/login.component';

@Component({
    selector:       'my-app',
    templateUrl:    'app/app.component.html',
    directives:     [LoginForm, MdButton, MdCard, MdIcon, MdToolbar, MD_SIDENAV_DIRECTIVES, MyModule],
    providers:      [MdIconRegistry]
})
export class AppComponent {
    public tipo:string = 'side';


    diMiNombre(name) {
        console.log('My name is: ', name);  
    }

}


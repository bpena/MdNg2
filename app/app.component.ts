import { Component } from '@angular/core';
import { MdButton } from '@angular2-material/button';
import { MdCard } from '@angular2-material/card';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

@Component({
    selector:       'my-app',
    templateUrl:    'app/app.component.html',
    directives:     [MdButton, MdCard, MdIcon],
    providers:      [MdIconRegistry]
})
export class AppComponent { }


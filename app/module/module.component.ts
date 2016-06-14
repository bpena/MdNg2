import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'my-module',
    template: '<div>Hello my name is {{name}}. <button (click)="sayMyName()">Say my name</button></div>'
})

export class MyModule {
    @Input() name;
    @Output() sayMyName = new EventEmitter();

    constructor() {
        this.sayMyName.emit(this.name);
    }
}
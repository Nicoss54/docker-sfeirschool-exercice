import { Component, Input } from '@angular/core';


@Component({
    selector: 'sfeir-docker-loading',
    templateUrl: './loading.component.html'
})

export class LoadingComponent {
    constructor() { }
    @Input() loading: boolean;
}

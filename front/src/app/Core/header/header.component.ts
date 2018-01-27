import { Component } from '@angular/core';
import { AppConstant } from '../../Shared/constant/app.constant';

@Component({
    selector: 'sfeir-docker-header',
    templateUrl: 'header.component.html'
})

export class HeaderComponent {
    constructor() { }

    imgPath: String = 'assets/image/sfeir-logo-bleu.png';
    constant = AppConstant;
}

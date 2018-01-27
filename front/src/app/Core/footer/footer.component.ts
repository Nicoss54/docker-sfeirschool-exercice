import { Component } from '@angular/core';
import { AppConstant } from '../../Shared/constant/app.constant';

@Component({
    selector: 'sfeir-docker-footer',
    templateUrl: 'footer.component.html'
})

export class FooterComponent {
    constructor() {}
    constant = AppConstant;
}

/**
 * Module Import
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Component Import
 */

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
    imports: [CommonModule],
    exports: [HeaderComponent, FooterComponent, LoadingComponent],
    declarations: [HeaderComponent, FooterComponent, LoadingComponent],
    providers: [],
})
export class CoreModule { }

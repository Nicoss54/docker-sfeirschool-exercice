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

@NgModule({
    imports: [],
    exports: [HeaderComponent, FooterComponent],
    declarations: [HeaderComponent, FooterComponent],
    providers: [],
})
export class CoreModule { }

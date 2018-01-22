import { NgModule } from '@angular/core';
import { SharedModule } from '../Shared/shared.module';

import { TodoCreateAndDisplayComponent } from './todo/create-and-display/create-and-display.component';

@NgModule({
    imports: [ SharedModule ],
    exports: [ TodoCreateAndDisplayComponent ],
    declarations: [ TodoCreateAndDisplayComponent ],
    providers: [],
})
export class FeatureModule { }

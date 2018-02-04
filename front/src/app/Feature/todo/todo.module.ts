import { NgModule } from '@angular/core';
import { TodoCreateAndDisplayComponent } from './create-and-display/create-and-display.component';
import { SharedModule } from '../../Shared/shared.module';
import { TodoRoutingModule } from './todo-routing.module';


@NgModule({
    imports: [ SharedModule, TodoRoutingModule] ,
    exports: [ TodoCreateAndDisplayComponent ],
    declarations: [ TodoCreateAndDisplayComponent ],
    providers: [],
})
export class TodoModule { }

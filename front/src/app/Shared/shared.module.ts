import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { MaterializeModule } from './materialize.module';
import { TodoService } from './service/todo.service';
import { AppService } from './service/app.service';


@NgModule({
    imports: [ CommonModule, HttpClientModule, MaterializeModule ],
    exports: [ CommonModule, MaterializeModule ],
    declarations: [],
    providers: [ TodoService, AppService ],
})
export class SharedModule { }

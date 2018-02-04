import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { MaterializeModule } from './materialize.module';
import { FormsModule } from '@angular/forms';
import { TodoService } from './service/todo.service';
import { AppService } from './service/app.service';


@NgModule({
    imports: [ CommonModule, HttpClientModule, MaterializeModule, FormsModule ],
    exports: [ CommonModule, MaterializeModule, FormsModule ],
    declarations: [],
    providers: [ TodoService ],
})
export class SharedModule { }

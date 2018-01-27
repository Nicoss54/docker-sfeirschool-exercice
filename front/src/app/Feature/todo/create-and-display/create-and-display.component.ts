import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../../Shared/service/todo.service';
import { MzToastService } from 'ng2-materialize';
import { Todo } from '../../../Models/todo.model';
import { AppService } from '../../../Shared/service/app.service';
import { AppComponent } from '../../../app.component';
import { AppConstant } from '../../../Shared/constant/app.constant';

@Component({
    selector: 'sfeir-docker-todo',
    templateUrl: 'create-and-display.component.html'
})

export class TodoCreateAndDisplayComponent implements OnInit {
    constructor( private _todoService: TodoService, private _toastService: MzToastService, private _appService: AppService ) {
        this._appService.isLoading = true;
    }

    todos: Todo[];
    constant = AppConstant;

    ngOnInit() {
        this.getTodos();
    }


    /**
     * Get the list of movies
     */
    getTodos() {
        this._todoService.getTodos().subscribe((todos: Todo[]) => {
            this.todos = todos;
        }, (err) => {
            this._toastService.show(this.constant.errorToastGetTodos, 5000, 'error');
        }, () => {
            this._appService.isLoading = false;
        });
    }
}

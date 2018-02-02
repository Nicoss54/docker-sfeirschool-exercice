import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from '../../../Shared/service/todo.service';
import { MzToastService } from 'ng2-materialize';
import { Todo } from '../../../Models/todo.model';
import { AppService } from '../../../Shared/service/app.service';
import { AppComponent } from '../../../app.component';
import { AppConstant } from '../../../Shared/constant/app.constant';


declare var Materialize: any;

@Component({
    selector: 'sfeir-docker-todo',
    templateUrl: 'create-and-display.component.html'
})

export class TodoCreateAndDisplayComponent implements OnInit {
    constructor( private _todoService: TodoService, private _toastService: MzToastService, private _appService: AppService ) {
        this._appService.isLoading = true;
    }

    todos = [new Todo()];
    constant = AppConstant;
    @ViewChild('todoForm') todoForm: NgForm;

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

    /**
     *
     * @param todoToSend {todo to send to service for saving in database}
     */
    postTodos(todoToSend: Todo) {
        this._appService.isLoading = true;
        this._todoService.postTodos(todoToSend).subscribe((todo: Todo) => {
            this.todos = [...this.todos, todo];
        }, (err) => {
            this._toastService.show(this.constant.errorToastPostTodos, 5000, 'error');
            this._appService.isLoading = false;
        }, () => {
            this._toastService.show(this.constant.successToastPostTodos, 5000, 'sucess');
            this._appService.isLoading = false;
        });
    }


    /**
     * Reset the todoForm and all materialize text field
     */
    resetTodoForm() {
        this.todoForm.form.reset();
        Materialize.updateTextFields();
    }

    /**
     *
     * @param todo
     * submit to the backend a new todo
     */
    submitTodoForm(todo: Todo) {
        this.postTodos(todo);
        this.resetTodoForm();
    }
}

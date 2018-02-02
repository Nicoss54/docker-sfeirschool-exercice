import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../../Models/todo.model';


@Injectable()
export class TodoService {
    constructor(private _httpClient: HttpClient) { }

    /**
     * Service to get my list of todos
     * @returns {Observable <Array<Todo>>}
     */
    getTodos(): Observable<Array<Todo>> {
        return this._httpClient.get<Array<Todo>>(environment.baseUrl + environment.api.todos);
    }

    /**
     * Service to post todos
     * @param todo
     * @returns {Observable <Todo>}
     */
    postTodos(todo: Todo): Observable<Todo> {
        return  this._httpClient.post(environment.baseUrl + environment.api.todos, todo);
    }

}

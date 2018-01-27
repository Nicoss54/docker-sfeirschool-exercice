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
     */
    getTodos(): Observable<Object> {
        return this._httpClient.get(environment.baseUrl + environment.api.todos);
    }

    postTodos(todo: Todo): Observable<Object> {
        return this._httpClient.post(environment.baseUrl + environment.api.todos, todo);
    }

}

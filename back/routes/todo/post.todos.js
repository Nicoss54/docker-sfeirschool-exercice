import TodoService from '../../services/todo.service';
import { Schema } from '../../route-validation-shema/todo/post-validation.todos'

const handler = async (request, reply) => {
    try {
        const todo = request.payload,
        todoStored = await TodoService.postTodos(todo);
        return reply (todoStored).code(201);
    } catch (err) {
        return reply(err).code(err.code);   
    }
};

export default {
    method: 'Post',
    path:'/todos',
    handler: handler,
    config: {
        validate: {
            payload: Schema
        },
        tags: ['api'],
        'description': 'Post todo',
        notes:'Return a list of todos'
    }
};
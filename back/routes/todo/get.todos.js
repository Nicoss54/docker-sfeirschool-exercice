import TodoService from '../../services/todo.service';

const handler = async (request, reply) => {
    try {
        const todos = await TodoService.getTodos();
        return reply(todos).code(200);
    } catch (err) {
        return reply(err).code(err.code);
    }
};

export default {
    method: 'GET',
    path: '/todos',
    handler: handler,
    config: {
        tags: ['api'],
        description: 'Get Todos',
        notes: 'Return a list of todos'
    }
};
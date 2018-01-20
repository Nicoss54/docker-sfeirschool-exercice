import Mongoose from 'mongoose';
import TodoModel from '../models/todo.model';
import ErrorCatching  from '../functions/error/error';

const getTodos = async () => {
    try {
        return  await TodoModel.find();
    } catch (err) {
        if (err) {
            console.error(err);
            throw ErrorCatching.getInternalError();
        }
    }
}

const postTodos = async (todo) => {
    const todoObject = new TodoModel(todo);
    if (todoObject.JoiValidate(todo).error) throw { code: 400, message: 'payload doesn\'t correspond to predefined model'};
    try {
        return await todoObject.save();
    } catch (err) {
        console.error(err);
        throw ErrorCatching.getInternalError();
    }
    
}


export default {
    getTodos,
    postTodos
}
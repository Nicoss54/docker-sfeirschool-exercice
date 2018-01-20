import Mongoose from 'mongoose';
import Joi from 'joi';


let todoSchema = new Mongoose.Schema ({
    todo: String
});

todoSchema.methods.JoiValidate = (object) => {
    const objectSchema = {
        todo: Joi.string()
    }
    return Joi.validate(object, objectSchema);
};

const todoModel = Mongoose.model('Todo', todoSchema, 'Todo');

export default todoModel;
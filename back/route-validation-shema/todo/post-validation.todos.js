import Joi from 'Joi';

export const Schema = Joi.object().keys({
    todo: Joi.string().required()
});


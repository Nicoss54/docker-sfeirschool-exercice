import Joi from 'joi';

export const Schema = Joi.object().keys({
    todo: Joi.string().required()
});


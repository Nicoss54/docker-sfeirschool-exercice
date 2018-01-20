const INTERNAL_ERROR = {
    code: 500,
    message: 'Internal error'
};

const BAD_REQUEST = {
    code: 400,
    message: 'Bad request'
};

const NOT_FOUND = {
    code: 404,
    message: 'Ressource not found or not exist'
};

const getInternalError = () => {
    return INTERNAL_ERROR;
};

const getBadRequestError = () => {
    return BAD_REQUEST;
};

const getNotFoundError = () => {
    return NOT_FOUND;
};

export default {
    getInternalError,
    getBadRequestError,
    getNotFoundError
};
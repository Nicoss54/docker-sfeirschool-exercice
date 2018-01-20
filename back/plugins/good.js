import Good from 'good';

const options = {
    reporters: {
        console: [{
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{
                response: '*',
                log: '*'
            }]
        }, {
            module: 'good-console'
        }, 'stdout']
    }
};

export default {
    register: Good,
    options: options
};
import HapiSwagger from 'hapi-swagger';
import Package from '../package';

const options = {
    info: {
        title: 'Api Documentation',
        version: Package.version
    }
};

export default {
    register: HapiSwagger,
    options: options
};
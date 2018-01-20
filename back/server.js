import Hapi  from 'hapi';
import CfgManager from 'node-config-manager';
import Mongoose from 'mongoose';
import RequireDirectory from 'require-directory';

/** ------------------------------- Configuration environment --------------- */
const options = {
    configDir: __dirname + '/config',
    env: process.env.NODE_ENV || 'dev',
    camelCase: true
}

CfgManager.init(options);
CfgManager.addConfig('hapi');
CfgManager.addConfig('mongo');
const HapiConfig = CfgManager.getConfig('hapi'),
MongoConfig = CfgManager.getConfig('mongo');

/** ------------------------------ Load plugin ----------------------------- */

const plugins = RequireDirectory(module, __dirname + '/plugins');
let pluginsRegisterer = [];
for (let plugin of Object.keys(plugins)) {
    pluginsRegisterer = [...pluginsRegisterer, plugins[plugin].default];
}

/** ------------------------------ Connection Database---------------------- */


Mongoose.Promise = global.Promise;
if (Mongoose.connection.readyState === 1) Mongoose.connection.close();

Mongoose.connect(MongoConfig.url, {useMongoClient: true}, (err) => {
    if (err) {
        console.error(err);
        throw err
    }
    console.info('Connection to database: success');

    const server = new Hapi.Server();
    server.realm.modifiers.route.prefix = '/api';
    server.connection ({
        host: HapiConfig.host,
        port: HapiConfig.port,
        routes: {
            cors: true
        }
    });

    server.register(pluginsRegisterer, (err) => {
        if (err) {
            console.error(err);
            throw err
        }

        console.log('All plugins are loaded\n');

        HapiConfig.routes.forEach((route) => {
            let routes = RequireDirectory(module, __dirname + route.path)
            for (let key of Object.keys(routes)) {
                server.route(routes[key].default);
                console.log(`${routes[key].default.method} ${routes[key].default.path} is loaded`);
            }

            server.start((err) => {
                if (err) {
                    console.log(err);
                    throw err
                }
                console.log('\n');
                server.log(`Server is running at ${server.info.uri}`);
            });
        });
    });
});
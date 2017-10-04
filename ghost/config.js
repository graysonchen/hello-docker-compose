// # Ghost Configuration
// Setup your Ghost install for various environments
// Documentation can be found at http://support.ghost.org/config/

var path = require('path'),
    config;
config = {
    production: {
        url: 'http://mytestblog.com',
        mail: {},
        database: {
            client: 'mysql',
            connection: {
                host     : 'db', // form docker-compose.yml
                user     : 'ghost',
                password : 'ghost',
                database : 'ghost',
                port     : '3306',
                charset  : 'utf8'
            },
            debug: false
        },
        paths: {
            contentPath: path.join(process.env.GHOST_CONTENT, '/')
        },
        server: {
            host: '0.0.0.0',
            port: '2368'
        }
        //, logging: false
    }
};
module.exports = config;

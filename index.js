'use strict';

const Hapi = require('hapi');
const Config = require('./app/config')

const GRID = new Hapi.Server()

GRID.connection({ port: Config.port })

GRID.start(() => {
    console.log('Server running at:', GRID.info.uri);
}); 

GRID.route(require('./app/routes')())

GRID.register(require("./plugins"));
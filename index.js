'use strict';

const Hapi = require('hapi');
const config = require('./config/app');
const Resolver = require('./.CORE/Engines/Resolver')


// configuration--------------------------------------------
const GRID = new Hapi.Server()

var connectionConfig = {
    port:process.env.PORT || config.port,
    routes:{cors:false}
}
if(!process.env.PORT){
   connectionConfig.host="localhost"
}

GRID.connection(connectionConfig)

Resolver(function(results){	
    results.handlers.items.map(function(handler){
        GRID.route(require(handler))
        // console.log(results.result.schemas)
    });

    // console.log(require("./CORE/Plugins")(results.result.schemas))
    GRID.register(require("./.CORE/Plugins/index")(results.result.schemas),function(err){
        if(err){throw err}

        GRID.start((err) => {
            if(err){ throw err }
            console.log('Server running at:', GRID.info.uri);
        });

    });
})
//-------------------------------------------------------------------------------------------------------





 
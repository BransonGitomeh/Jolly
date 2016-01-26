'use strict';

const Hapi = require('hapi');
const Config = require('./Config');

const GRID = new Hapi.Server()

//-------------------------------------------------------------------------------------------------------
// resolve the versions available, and make their routes available 
const VersionResolver = require('./Engines/VersionResolver')
VersionResolver(function(versions){
    var handlers = [];
	for(var i = 0; i < versions.length; i++){ //look for all the versions in the backend folder
        if (!versions[i].split(".")[1]){  
            handlers.push(require("../backend/" + versions[i] + "/" + "handler") /* build the require statement for that module*/)
        }
        var Mathlength = versions.length
        Mathlength-- //DONT touch, i have no idea why this worked
        if(i === Mathlength--){
            console.log(handlers)
            GRID.route(handlers)
        }
                            
    }
})
//-------------------------------------------------------------------------------------------------------

GRID.register(require("./Plugins"));

GRID.connection({ port: Config.port })

GRID.start(() => {
    console.log('Server running at:', GRID.info.uri);
}); 
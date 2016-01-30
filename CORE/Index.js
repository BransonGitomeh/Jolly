'use strict';

const Hapi = require('hapi');
const Config = require('./Config');

const GRID = new Hapi.Server()

GRID.connection({
    host:"localhost",
    port:(process.env.PORT || Config.port),
    routes:{
        cors:true
    }
})

//-------------------------------------------------------------------------------------------------------
// resolve the versions available, and make their routes available 
const VersionResolver = require('./Engines/VersionResolver')
VersionResolver(function(versions){
    var handlers = [];
	for(var i = 0; i < versions.length; i++){ //look for all the versions in the backend folder
        if (!versions[i].split(".")[1]){  
            var handler = require("../backend/" + versions[i] + "/" + "handler")
            console.log(handler)
            // handlers.push(require("../backend/" + versions[i] + "/" + "handler") /* build the require statement for that module*/)
            GRID.route(handler)
        }
        var Mathlength = versions.length
        Mathlength-- //DONT touch, i have no idea why this worked
        if(i === Mathlength--){
            // console.log(handlers)
            // GRID.route(handlers)
        }
                            
    }
})
//-------------------------------------------------------------------------------------------------------


GRID.register(require("./Plugins"),function(err){
    if(err){
        throw err
    }

    GRID.start((err) => {
    if(err){
        throw err
    }
    console.log('Server running at:', GRID.info.uri);
    });

});


 
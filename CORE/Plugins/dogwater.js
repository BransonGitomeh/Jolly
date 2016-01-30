const faker = require('faker/locale/en');

module.exports = function(stuff){
    var plugin = {
        register: require('dogwater'),
        options: {
            adapters: {
                memory: require('sails-memory'),
                // mongo: require('sails-mongo')
            },
            connections: {
                simple: { adapter: 'memory' }
                // mongodb:{
                //   adapter: 'mongo',
                //   host: 'localhost', // defaults to `localhost` if omitted
                //   port: 27017, // defaults to 27017 if omitted
                // }
            },

            models: [],
            fixtures: []
          }
    }

    stuff.map(function(schema){
        var schemalink = "../../backend/" + schema.version + "/collections/" + schema.collection + "/Schema"
        var fixturelink = "../../backend/" + schema.version + "/collections/" + schema.collection + "/Fixtures"

        plugin.options.models.push(require(schemalink))
        plugin.options.fixtures.push(require(fixturelink)(faker))  
    });

    return plugin
}
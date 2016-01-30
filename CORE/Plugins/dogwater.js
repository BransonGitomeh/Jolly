const faker = require('faker/locale/en');

module.exports = function(stuff){
    var plugin = {
        register: require('dogwater'),
        options: {
            adapters: require("../../config/adapters"),
            connections: require("../../config/connections"),

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
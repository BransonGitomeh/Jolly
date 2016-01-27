// const faker = require('faker/locale/en');

module.exports = {
    register: require('dogwater'),
    options: {
        adapters: {
            memory: require('sails-memory'),
            mongo: require('sails-mongo')
        },
        connections: {
            simple: { adapter: 'memory' },
            mongodb:{
              adapter: 'mongo',
              host: 'localhost', // defaults to `localhost` if omitted
              port: 27017, // defaults to 27017 if omitted
            }
        },

        //build this dynamically using the resolver
        models: [
            require('../backend/v1/collections/user/Schema'),
            require('../backend/v1/collections/church/Schema')
        ],

        // fixtures: [
        //   require('../backend/v1/collections/user/Fixtures')(faker),
        //   require('../backend/v1/collections/church/Fixtures')(faker),
        // ]
      }
}
const faker = require('faker/locale/en');

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

        //split to file nearer to the 
        models: [
            require('./app/v1/collections/user/Schema'),
            require('./app/v1/collections/church/Schema')
        ],

        fixtures: [
          require('./app/v1/collections/user/Fixtures')(faker),
          require('./app/v1/collections/church/Fixtures')(faker),
        ]
      }
}
module.exports = {
  identity: 'church',

  connection: 'mongodb',

  attributes: {
    name: 'string',

    users:{
      collection:"user",
      via:"church"
    },

    pastors:{
      collection:"user",
      via:"pastor"
    }
   }
}

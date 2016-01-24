module.exports = {
  identity: 'user',

  connection: 'mongodb',

  attributes: {
    name: 'string',

    church:{
      model:"church"
    },

    pastor:{
      model:"church"
    }

   }
}

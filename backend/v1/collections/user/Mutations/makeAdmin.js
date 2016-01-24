module.exports = function(QueryToken){
  console.log(">_ makeAdmin Mutation resolved");
  console.log(">_ The following values were provided in the query");

  QueryToken.QueryFields.map(function(field){

    console.log(field.key + " -> " + field.value)

    if(field.type = "relation"){
      if(field.fields){
        field.fields.map(function(myfield){
          console.log(myfield.key + myfield.value);
        })
      }

    }

  })
}

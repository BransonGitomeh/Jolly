module.exports = function(QueryToken,db){
  console.log(">_ delete mutation resolved");
  console.log(">_ The following values were provided in the query");

  // ====================acess params passed to the mutation====================
  userToBeDeleted = {}

  // build a user object with the values provided
  QueryToken.QueryFields.map(function(field){
    console.log(field.key + " -> " + field.value)
    userToBeDeleted[field.key] = field.value
  })

// db interaction
  var collection = db.collection("users");
  collection.insert(userToBeDeleted)
  // ==============acess params passed to the mutation==========================
  collection.findAndRemove(userToBeDeleted,function(err, doc){
    console.log(doc);
    console.log("item has been deleted successfully");
    collection.findOne(userToBeDeleted,function(err,item){
      console.log(item)
    })
  })
}

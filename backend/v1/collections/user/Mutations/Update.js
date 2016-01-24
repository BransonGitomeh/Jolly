module.exports = function(QueryToken,db){
  console.log(">_ makeAdmin Add resolved");
  console.log(">_ The following values were provided in the query");

  //construct an object to save to the database
  var userToBeEdited = {};
  // ====================acess params passed to the mutation====================
  QueryToken.QueryFields.map(function(field){
    console.log(field.key + " -> " + field.value)
    userToBeEdited[field.key]=field.value
  })
  // ==============acess params passed to the mutation==========================

  // console.log(user);

  var collection = db.collection("users");
  // collection.insert(user)

  // Wait for a second before finishing up, to ensure we have written the item to disk
  setTimeout(function() {

    // Fetch the document
    collection.findOne({email: userToBeEdited.email}, function(err, item) {
      // assert.equal(null, err);
      // assert.equal('world_no_safe', item.hello);
      // db.close();
      console.log("db reading complete");
      console.log("record added successfully");
      console.log(item.email);

      console.log("now to edit the record");

      collection.update({email:userToBeEdited.email}, {$set:{age:210}});
      // Wait for a second then fetch the document
      setTimeout(function() {

        // Fetch the document that we modified
        collection.findOne({email:userToBeEdited.email}, function(err, item) {
          // db.close();
          console.log(item.age);
        });
      }, 1000);
    })
  }, 100);
}

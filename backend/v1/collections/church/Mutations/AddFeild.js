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

      item["newFeild"] = "a new feild to this item, did not exist"

      collection.save(item,{w: 1},function(err, newitem){
        if(err) console.error(err);

        console.log("item saved with the new feild");

        //wait a bit and the new feild will have added to the db successfully
        setTimeout(function() {
          collection.findOne({email:userToBeEdited.email}, function(err, item) {
            // db.close();
            console.log(item);
          });
        },1000)
      })
    })
  }, 100);


}

module.exports = function(QueryToken,db,returnCreatedUser){
  console.log("startedCreating");
  console.log(QueryToken);
  //construct an object to save to the database
  var user = {};
  // ====================acess params passed to the mutation====================
  QueryToken.QueryFields.map(function(field){
    console.log(field.key + " -> " + field.value)

    //ensure that the email is always saved as the id
    if(field.key === "email"){
      user._id = field.value
    }else{
      user[field.key]=field.value
    }
  })
  // ==============acess params passed to the mutation==========================

  console.log(user);

  var collection = db.collection("user");
  collection.insert(user)

  // Wait for a second before finishing up, to ensure we have written the item to disk
  setTimeout(function() {
    // Fetch the document
    collection.findOne({_id: user._id}, function(err, item) {
      returnCreatedUser(item)
    })
  }, 1000);


}

// processes queries to get multiple or single objects, only gets the data from the database
// this could probably be abstracted to work for multiple databases

module.exports = {
  SingleObject:function(QueryToken,db,sendDataForFilteringCB){
    var Object = db[QueryToken.QueryTarget];

    //buld the query key dynamically based on the querie's key
    var queryObject = {}; queryObject[QueryToken.ParamKey] = QueryToken.ParamValue

    // console.log(queryObject);

    Object.findOne(queryObject, function(err, item) { //find the data in the database

      if(err){
        console.log(err);
      }

      if(item){
        console.log(QueryToken.QueryTarget + " Record found of  with  _id(" +  QueryToken.ParamValue + ")");
        sendDataForFilteringCB(item) //send the data up to be filtered
      }else{
        console.error("Database returned Objecttype " + typeof(item));

        if(typeof(item) === "undefined"){
          console.log("no " + QueryToken.QueryTarget + " Record found of  with  _id(" +  QueryToken.ParamValue + ")");
        }else{
          console.log(typeof(item));
        }
      }
   })

  //  make an association save it and get it
   Object.findOne({_id: QueryToken.ParamValue}).populate("users").exec(function(err, users){
     if(err){
       console.log(err);
     }else{
       console.log(users);
     }
   })
  //  console.log(Object.find().populate("users"));
  console.log(" ");


  // upcoming fixture generator

  //  ================================================================
  //  test making association on demand
  //  var churchName = "testChurch " + Math.random()
  //  var userName = "testUser " + Math.random()
  //
  // //  start construction process
  //  db.church.create({
  //    name:churchName,
  //  }).exec(function(err,church){
  //
  //    console.log(" ");
  //    console.log(church);
  //    console.log("creating of church successfull");
  //    console.log(" ");
  //
  //   //  create a user and associate him to the top church
  //    db.user.create({
  //      email: userName,
  //      // Set the User's Primary Key to associate the Church with the User.
  //      church: church.id
  //    })
  //    .exec(function(err, User) {
  //
  //      console.log(User);
  //      console.log("creation of relationhip sucessfull" );
  //      console.log(" ");
  //
  //
  //      db.church.findOne({name:churchName}).populate("users","pastors").exec(function(err, church){
  //        console.log("gotten the church with its users");
  //        console.log(church);
  //      })
  //    });
  //
  //  })

   var counter = 0;
   var maxItems = 20;

   var faker = require('faker/locale/en');

   function populateUser(){
     //  ================================================================
     //  test making association on demand
      var churchName = faker.company.companyName();
      var userEmail = faker.internet.email();

     //  start construction process
      db.church.create({
        name:churchName,
      }).exec(function(err,church){

        console.log(" ");
        console.log(church);
        console.log("creating of church successfull");
        console.log(" ");

       //  create a user and associate him to the top church
        db.user.create({
          email: userEmail,
          // Set the User's Primary Key to associate the Church with the User.
          church: church.id
        })
        .exec(function(err, User) {

          console.log(User);
          console.log("creation of relationhip sucessfull" );
          console.log(" ");


          db.church.findOne({name:churchName}).populate("users","pastors").exec(function(err, church){
            console.log("gotten the church with its users");
            console.log(church);

            counter ++

            // done making the user
            if(counter < maxItems) {
              populateUser()
            }else{
              console.log('done making the ' + maxItems + " items");
              sendDataForFilteringCB()
            }

          })
        });

      })
    // ==============================================================================

   }

  //  populateUser() //execute the thing
  // console.log(faker.name.findName());

 // ==============================================================================

  },

  MultipleObjects:function(QueryToken,db,sendDataForFilteringCB){
    // var Object = db.collection(QueryToken.QueryTarget);

    var RangeStart = QueryToken.rangeStart;
    var RangeEnd = QueryToken.rangeEnd;
    var RangeLength = RangeEnd - RangeStart;

    var Object = db[QueryToken.QueryTarget]

    Object.find().skip(RangeStart).limit(RangeLength).exec(function(err, objects) { //find the data in the database
      sendDataForFilteringCB(objects) //send the data up to be filtered
    })
  }
}

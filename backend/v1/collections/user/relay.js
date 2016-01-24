var QueryProcessor = require("../../../engines/QueryProcessor") //gets the data from the databse
var DataFilter = require('../../../engines/DataFilter'); //filters the data returns only the fields that have been asked for in the query

// mutationResolver
var userCreator = require("./Mutations/Create");


module.exports = function(QueryToken,db,sendFilteredDataCB){

  switch(QueryToken.QueryType){
    case "Unary":
       QueryProcessor.SingleObject(QueryToken,db,function(SingleUser){ //fetch the data
         DataFilter.SingleObjectFilter(SingleUser,QueryToken,function(filteredData){ //filter the data
           sendFilteredDataCB(filteredData) //pass the filtered data up to be sent to the user
         });
       });
     break;

    //  range resolver
    case "Range":
      QueryProcessor.MultipleObjects(QueryToken,db,function(MultipleUsers){ //fetch the data
        DataFilter.MultipleObjectFilter(MultipleUsers,QueryToken,function(filteredData){ //filter the data
          sendFilteredDataCB(filteredData) //pass the filtered data up to be sent to the user
        });
      });
     break

    //mutations resolving
    case "Mutation":

      switch(QueryToken.MutationType){
        //normal mutations
        case "Create":
            console.log("asked to create");
            // require("./Mutations/Create");
            userCreator(QueryToken,db,function(createdUser){
              sendFilteredDataCB(createdUser)
            });

           break;
        case "Delete":require("./Mutations/Delete")(QueryToken,db); break;
        case "Update":require("./Mutations/Update")(QueryToken,db); break;
        case "Update":require("./Mutations/Update")(QueryToken,db); break;

        //custom mutations, add below here
        case "makeAdmin":require("./Mutations/makeAdmin")(QueryToken,db);break;
        case "AddField":require("./Mutations/AddFeild")(QueryToken,db);break;
      }
  }
}

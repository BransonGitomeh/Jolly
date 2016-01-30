const QueryResolver = require("../../CORE/Engines/QueryResolver");
const QLparser = require('../../CORE/Engines/Parser');
const Pretifier = require('../../CORE/Engines/Pretifier')
const Config = require('../../CORE/Config');
const testQ = require('../../Tests/queries');


module.exports = {
      method:"GET",
      path:"/v1/{Query?}",
      handler:function(request,reply){

        var RequestReceiveTime = new Date(); //keep in mind time the req came in
        
        console.log("--------------------------------------------------------------------")

        console.log("Query => ( " + request.params.Query + " )" + " @ " + RequestReceiveTime)

        LIVEQueryString = request.params.Query

        TESTQueryString = testQ.multipleObjectQuery  //replaced by request.params("query")

        QueryToken=QLparser.parse(TESTQueryString) //parse the query and extraxt the token

        QueryResolver(QueryToken,request.collections, function(data){ //use the token to calculate what the user wants
          reply(Pretifier(QueryToken,RequestReceiveTime,data)) //reply with exact data asked for and client happy
        })
      }
}
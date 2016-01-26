const Config = require('../../CORE/Config');


module.exports = function(QueryToken,RequestReceiveTime,data){
    	   ResolveTime = Math.abs(new Date() - RequestReceiveTime) + "(Ms)";

          var responce = {}

          if(Config.apiStats === !false){
            if(QueryToken.rangeStart){
              responce.range = QueryToken.rangeStart + "-" + QueryToken.rangeEnd
            }


            responce.data = data,
            responce.stats = {
              RequestReceiveTime : RequestReceiveTime,
              RequestResolveTime : new Date(),
              timeTaken : ResolveTime
            }//decorate responce object with stats of entire query process


          }else{
            if(QueryToken.rangeStart){
              responce.range = QueryToken.rangeStart +  "-" +  QueryToken.rangeEnd
            }

            responce.data = data

          } //respond with an object that does not have the api statistics

          // show on console
          console.log(QueryToken.QueryFields.length + " Fields Queried to " + QueryToken.QueryTarget + " Resolved in " + ResolveTime);

          return responce;
}
var userTypeResolver = require('./collections/user/relay')
var churchTypeResolver = require('./collections/church/relay')


module.exports = function(QueryToken,db,replyCB){

        switch (QueryToken.QueryTarget){
          case "user":

            userTypeResolver(QueryToken,db,function(resolvedUser){
              replyCB(resolvedUser)
            });

           break;

           case "church":

             churchTypeResolver(QueryToken,db,function(resolvedUser){
               replyCB(resolvedUser)
             });

            break;

          default :
            console.log(QueryToken.QueryTarget + " has not been found in the nodeResolver, have you added it?");
        }
}

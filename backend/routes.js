const QLresolver = require("./v1/resolver");
const QLparser = require('./engines/Parser');
const Config = require('./config')
const testQ = require('./queries');

const m = require("mithril")
const render = require('mithril-node-render');


module.exports = function(){
  return [{
      method:"GET",
      path:"/v1",
      handler:function(request,reply){


        var RequestReceiveTime = new Date(), RequestTime;

        var db = request.collections

        QueryString = testQ.churchMultipleObjectQuery  // a spec complient query, parsed by the parser

        QueryToken=QLparser.parse(QueryString)

        QLresolver(QueryToken,db, function(data){
          RequestTime = Math.abs(new Date() - RequestReceiveTime) + "(Ms)";

          var responce = {}

          if(Config.apiStats === !false){
            if(QueryToken.rangeStart){
              responce.range = QueryToken.rangeStart + "-" + QueryToken.rangeEnd
            }


            responce.data = data,
            responce.stats = {
              RequestReceiveTime : RequestReceiveTime,
              RequestResolveTime : new Date(),
              timeTaken : RequestTime
            }//decorate responce object with stats of entire query process


          }else{
            if(QueryToken.rangeStart){
              responce.range = QueryToken.rangeStart +  "-" +  QueryToken.rangeEnd
            }

            responce.data = data

          } //respond with an object that does not have the api statistics

          // show on console
          console.log(QueryToken.QueryFields.length + " Fields Queried to " + QueryToken.QueryTarget + " Resolved in " + RequestTime);

          // reply(responce) //send to the user via hapi's reply function

          // lets make mitril generate that dom and send it to the client
            var myApp = {
              view:function(){
                return m("div",{
                  consfig:function(){
                    alert("heey i just arrived")
                  }
                },[
                  responce.data.map(function(data){
                    console.log(data)
                    return m("h4",data.name)
                  })
                ])
              }
            }

            var html = render(myApp)

            reply(html)
        })
      }
    },{
      method:"GET",
      path:"/iso",
      handler:function(request,reply){
        var myApp = {
          view:function(){
            return m("h1","i am isomorphic")
          }
        }
        var html = render(myApp)
        reply(html)
      }
    }
  ]
}

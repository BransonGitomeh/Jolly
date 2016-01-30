const QueryResolver = require("../../CORE/Engines/QueryResolver");
const QLparser = require('../../CORE/Engines/Parser');
const Pretifier = require('../../CORE/Engines/Pretifier')
const Config = require('../../CORE/Config');
const testQ = require('../../Tests/queries');


module.exports = {
      method:"GET",
      path:"/",
      handler:function(request,reply){
        reply("application has started ;-)")
      }
}
var fs = require("fs");
var path = require("path")

module.exports = function(callback){
    var versionsDir = "./backend/";
    var handlers = []
    return fs.readdir(versionsDir,function(err,versions){
            if(err) console.log(err)
    
            if(versions){
                callback(versions)
            }
           
    })
}
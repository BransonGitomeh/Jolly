var fs = require("fs")
var counter = 0;


module.exports = {
	link:function(resolver,collections,rootDir,collectionItem){
		collections.map(function(collection){
		        var versionDir = rootDir + "/" + collection
		        var mutationDir = rootDir + "/" + collection + "/" + "Mutations"
		        var Schema = rootDir + "/" + collection + "/Schema"
		        var Fixture = rootDir + "/" + collection + "/Fixtures"


		        var mutationFolder = {
		        	version:collectionItem.version,
		        	collection:collection
		        }

		        resolver.result.mutationFolders.push(mutationFolder)


		        resolver.mutations.dirs.push(mutationDir)
		})
	},
	peepItems:function(resolver,mutations,rootDir,collection,version){
		mutations.map(function(mutation){
			var mutationTrimmed = mutation.split(".")[0]
			
			var mutationLink = rootDir + "/" + mutationTrimmed
			
	        resolver.mutations.items.push(mutationLink)

	        var mutation = {
	        	version:collection.version,
	        	collection:collection.collection,
	        	mutation:mutationTrimmed,

	        }

	        var schema = {
	        	version:collection.version,
	        	collection:collection.collection
	        }

	        resolver.result.schemas.push(schema)

		    resolver.result.fixtures.push(schema)

	        // console.log(schema)
	        // console.log("link " + schema.version + "/collections/" + schema.collection + "/Fixtures")
	        // console.log("link " + schema.version + "/collections/" + schema.collection + "/Schema")

	        resolver.result.mutations.push(mutation)
	    })
	},
	peep:function(resolver,version,callback){

		var mutationLink = resolver.mutations.dirs[counter];
		var collection = resolver.result.mutationFolders[counter]

		var self = this;
		if (mutationLink) {
			fs.readdir(mutationLink,function(err,mutations){
				self.peepItems(resolver,mutations,mutationLink,collection,version);		           			
				if(counter != resolver.mutations.dirs.length){
					counter += 1;
					self.peep(resolver,version,callback)
				}

				if(counter === resolver.mutations.dirs.length){
					callback(resolver)
				}
			})
		};				           									           	
  }
}
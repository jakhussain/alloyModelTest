exports.definition = {
	config: {
		columns: {
		    "title": "string",
			"text":"string",
			"mood":"string",
			"dateCreated":"string"
		},
		adapter: {
			type: "sql",
			collection_name: "journal"
		}
	},		
	extendModel: function(Model) {		
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});
		
		return Model;
	},
	extendCollection: function(Collection) {		
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});
		
		return Collection;
	}
}


exports.definition = {
	
	config: {
		"columns": {
			"title":"TEXT",
			"text":"TEXT",
			"mood":"TEXT",
			"dateCreated":"TEXT"
		},
		"adapter": {
			"type": "sql",
			"collection_name": "model"
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


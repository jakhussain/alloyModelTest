


var testCollection = Alloy.createCollection("journal");
	
function addentry(){
	var journalModel = Alloy.createModel("journal");
	
	var no=1;
	var data = {
		title : 'title' + no,
        text: 'text' + no,
        mood: 'happy' + no,
		dateCreated : new Date()
	};
	
	 	 journalModel.save(data);
	 
}


//save entry
function doClick(e) {  
	
		addentry();
	
    alert('data saved !');
}

//Fetch entry
function doClickFetch(e) {  

    testCollection.fetch();
    alert('Records Length: ' + testCollection.length);
    
}

//Remove models
function doClickRemove(e) {  
	alert('doClickRemove');
	testCollection.fetch();
	var collectionLength = testCollection.length;
   alert(collectionLength);
   var modelsArray = [];
   var i=0;
   while(i<collectionLength){
   	//alert(i);
   	var modelAt = testCollection.at(i);
   	
   	if(modelAt !== null || modelAt !== 'undefined')
   	{
   		//modelAt.title = 'titleUpdate'+i;
   		//modelAt.destroy();
   		modelsArray.push(modelAt);	
   	}else
   	{
   		alert('modelAt is either null or undefined');
   	}
   	i++;
   	
   }//while end here
   
   
   for(var i=0; i < modelsArray.length; i++)
   {
   		modelsArray[i].destroy()
   }
  
   
   alert('Models removed !!!');
}


$.index.open();

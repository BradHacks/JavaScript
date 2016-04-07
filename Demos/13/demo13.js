//FILTER MAP REDUCE

/*

MAP - builds a new array corresponding to this array

FILTER - builds a new array that only contains desired items

REDUCE - 

*/


var processTransaction = function(){
    var items = [// our collection of items
        {id:1, price:10, name:"portable battery"},
        {id:2, price:4, name:"hair brush"},
        {id:3, price:1, name: "gum"}
        ]; 
    var given = [];
    
    //collect the items customer is attempting to purchase
    for(var arg in arguments){
        given.push(arguments[arg]);
    }
    
    //get all of our known ids
    getIDs = function(){
        return arguments[0].id;
    }
    
    var ids = items.map(getIDs);
    
    console['log']('Mapped ids:'+ids);
    
    //validate items against ids
    var isValid = function(){
        if(ids.indexOf(arguments[0]) !== -1){
            return true;
        }else{
            return false;
        }
        
    }
    
    accepted = given.filter(isValid);
    for(var x=0; x<accepted.length; x++){
        console.log(accepted[x]+' was accepted.');
    }
    
    var itemIDs = accepted;
    var generateReciept = function(id){
        for(var x=0; x<items.length; x++){
            if(items[x]['id']===id){
               return items[x];
            }
        }
    }
    var reciept = itemIDs.map(generateReciept);
    console.log(reciept);


    //calculate our subtotal.
    getPrice = function(){
        return arguments[0].price;
    }
    var prices = reciept.map(getPrice);
    var subtotal = prices.reduce(function(){return arguments[0] + arguments[1]});
    console.log(subtotal);
    /*
        reduce takes four arguments (eg first call above it takes
            prices[0]<-previous value, 
            prices[1]<-current value,
            1<- current value index,
            and prices <- the array)
    */
}

processTransaction(1,3,3,2,5,1,7,3,2);

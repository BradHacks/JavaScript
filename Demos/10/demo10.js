//ANONYMOUS FUNCTIONS AND CALLBACKS

var eatFood = function(callback){//this is the callback pattern
    console.log('eating...');
    callback();
}


//anonymous function passed as a callback.
eatFood(function(){
    console.log('food is now being digested');
});

haveFoodFight = function(){
    console.log('Throwing food..');
};//what happens if i remove this semi-colon?

//eatFood(haveFoodFight);//pre-defined method passed as a callback.
(function(){
    console.log("What's my name?");
}());
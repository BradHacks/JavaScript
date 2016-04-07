//CLOSURES
var Throw = function(item){  
    return function(target){//function factory
        console.log('Throwing '+item+' at '+target+'!');
    }
}

var Mjolnor = 'Mjolnor';
var CaptainAmerica = 'Captain America';
ThrowHammer = Throw(Mjolnor);
ThrowHammer(CaptainAmerica);


var throwStuff = function(target){
    actions = [];
    arsenal = ['Mjolnor','Shield','Loki'];
    for(var x=0; x<arsenal.length; x++){
        actions.push(function(){
            //console.log(arsenal);
            Throw(arsenal[x])(target);//<= reference to x variable in memory
        })
        
    }
    return actions;
}
var actionQueue = [];
var goNuts = function(target){
    actions = throwStuff(target);
    for(var i=0; i<actions.length; i++){
        actionQueue.push(actions[i]);
    }
}
goNuts(CaptainAmerica);
while(actionQueue.length){
    actionQueue.shift()();
}
//SCOPE CHAIN & HOISTING
/*
window.name = 'Jerry';

console.log('The global name variable is set to ' + name);

var speak = function(){
    var name = 'Jack'; //<= var declared 
    console.log('Hi my name is ' + name);
}

var talk = function(){
    name = 'John'; //<= var not declared
    console.log('Hi my name is ' + name);
}

var yell = function(){
    name = 'Jake';
    var name = 'Jake';
    console.log('HI MY NAME IS ' + name.toUpperCase() + '!!');
    var respond = function(){ //<= functions reside in scope as well.
        name = "Doofus";
        console.log('Why are you screaming ' + name + '? >.>');
    }
}

speak();
talk();
yell();
respond();

console.log('The global name variable is set to '+name);


*/
//Just a chain..


var level4 = {//bottom of the chain
    exec:function(fnc){
        throw "function not found exception";
    }
}

var level3 = {
    exec:function(fnc){
        console.log("checking if level 3 function...");
        return this[fnc]? this[fnc]() : level4.exec(fnc);
    }
    
}


var level2 = {
    exec:function(fnc){
        console.log('checking if level 2 function...');
        return this[fnc]? this[fnc]() : level3.exec(fnc);
    },
    getObjId:function(){
        return 'a random id';
    }
}

var level1 = {
    exec:function(fnc){
        console.log('checking if level 1 function....');
        //console.log(this)
        return this[fnc]? this[fnc]() : level2.exec(fnc);
    },
    getName:function(){return 'jack';}
}

console.log(level1.exec("getName"));
console.log(level1.exec("getObjId"));
console.log(level1.exec("doNothing"));

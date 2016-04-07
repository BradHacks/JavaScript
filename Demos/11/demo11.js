//CURRYING AND ARGUMENTS

var Multiply = function(){
    var total= 1;
    for(var x=0; x<arguments.length; x++){
        total = total*arguments[x];
    }
    return total;
}

console.log(Multiply(10,20));//200
console.log(Multiply(2,2,4));//16

//Here we take our multiply function and preset parameters
//in order to create our double function.
var Double = function(num){        
    return Multiply(2,arguments[0]);
}

console.log(Double(20,23));//40




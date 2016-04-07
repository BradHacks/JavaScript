//PROPERTY ACCESSORS

var Erin = {
    name: 'Erin',
    age: 31,
    eyeColor: 'Hazel',
    0: function(){
        console.log('0 is my property');
    }
}
Erin[0]();

console.log('======Property Accessors======');
console.log(Erin.name); //<- dot notation
console['log'](Erin['age']); //<- bracket notation
console.log('==============================');

//Bracket notation 
var Jack = {};
var action = 'jump';
Jack['name'] = 'Jack'; 
Jack[action] = function(){//<= used the value of action variable
    console['log'](this['name']+' jumped!');
}
console['log']('======Bracket Notation=====');
console['log']('My name is '+ Jack['name']+'.');
Jack.jump();
Jack['jump']();


//For-In Caveat
console.log("======FOR IN======");
var arr = ["dog","cat","fish","snake","rabbit"];

arr['x']="monkey";

for(var item in arr){
    console.log(arr[item]);
}

console.log(arr.__proto__);

console.log("======Array Length======");
for(var item=0; item<arr.length; item++){
    console.log(arr[item]);
}




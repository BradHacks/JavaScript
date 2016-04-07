//FUNCTION FACTORIES
var examine;
var mirror;
var dog;
(function(){
    var examinable = {note:'I am examinable!'};
    var isExaminable = Object.create(examinable);
    mirrorTemplate = Object.create(examinable);
    mirrorTemplate.type='glass';
    mirrorTemplate.surface='reflective';
    //here's our factory
    examine = function(item){
        valid = function(){return item.__proto__.__proto__== isExaminable.__proto__? true:false;}
        if(valid()){
            
            return function(){
                for (var prop in item) {
                  console.log(item[prop]);
                }
            }
        }else{
            return function(){
                console.log('Item is not examinable');
            };
        }
    }
    
}());
dog = {name:'Spike'};
console.log('======DOG======');
examineDog = examine(dog);
//creates clean function calls.
examineDog();
console.log('======MIRROR======');
mirror = Object.create(mirrorTemplate);
examineMirror = examine(mirror);
examineMirror();
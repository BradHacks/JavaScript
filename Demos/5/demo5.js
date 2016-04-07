//PROTOTYPAL INHERITANCE

//animal => dog => spike
var animal = {
    breathe: function(){
        console.log('breathing...');
    },
    speak: function(){
        console.log('...');
    }
    
};

var dog = Object.create(animal);//<= set animal as prototype
dog['bark'] = function(){
    console['log']('woof woof woof');
};
dog.growl = function(){
    console.log('grrrrrrrr');
};
dog.speak = function(){
    console.log(this);
    this.bark();
};
var spike = Object.create(dog, {name:{value:'Spike'}, age:{value:4}, bark:{value:function(){console['log']('arf arf arf');}}});
//set dog as prototype and define attributes/methods =^



console.log(spike);
spike['growl']();
spike.breathe();


spike.speak();//<= searches down prototype chain. hits speak on dog prototype.
//then bark is called from top level as 'this' refers to the object(spike) not it's prototype;



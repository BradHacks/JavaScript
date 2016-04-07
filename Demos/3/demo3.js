//THE 'THIS' KEYWORD

name = 'Jack';
age = 72;

describe= function(){
    console['log'](this['name'] + ' is '+this['age']+' years old.');
    //^= this refers to global object.
}

describe();

var bill = {
    name: 'William',
    age: 48,
    examine: function(){
        console.log('This is '+this.name);
        //^= this refers to the bill object.
        describe();
    }
}

bill['examine']();


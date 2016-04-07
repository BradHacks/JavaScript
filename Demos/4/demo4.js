//CALL APPLY AND BIND

var bill = {
    name: 'William',
    age: 48,
    birthday: 'November Seventh',
    examine: function(birthday){
        var birthday = birthday? birthday:this.birthday;
        console.log(this.name+' is '+this.age+' years old!');
        console.log(this.name+"'s birthday is on "+birthday+'!');
    }
};

console.log('======Bill=====');
bill.examine();

var jen = {
    name: 'Jennifer',
    age: 33
}


console.log('======CALL======');
bill.examine.call(jen,'January Tenth'); //<= object passed is this.


console.log('======APPLY======');
bill.examine.apply(jen,['December Fourth']); //<= object passed is this.


console.log('======BIND======');
examineJen = bill.examine.bind(jen, 'April Seventeenth');
console.log(examineJen);
examineJen();

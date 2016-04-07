//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS
(function(){
    console.log('ran this function');
}());//invoking an anonymous function as it is declared.

var c= function(){
    console.log('ran this one as well');
    return 'stuff';
}();//invoking an anonymous function and storing its returned value on the fly.
console.log(c);
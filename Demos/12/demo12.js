//PROMISES

var a = function (){
    console.log('Processing a');
    return {
        onFinished:function(){
            console.log('a finished!');
            //we can have our promise trigger any number of callbacks
            for(var item in arguments){
                arguments[item]();
            }
        }
    }
}
var entity = {
    doOtherStuff: function(){
        console.log('doing other stuff');
    }
}
//Our promise is now being used to trigger this callback function
a()['onFinished'](entity['doOtherStuff'],entity['doOtherStuff']);

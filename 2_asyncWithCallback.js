/*
* Async Function
* */
function asyncFunction(callback){
    var result;
    setTimeout(function () {
        result = 'Get result after 1 second';
        callback(result);
    },1000);
    // We don't need to return anything
    // return result;
}
/*
* Calling asyncFunction
* */
function getResult(finalResult){
    console.log('Your result: ', finalResult);
}
asyncFunction(getResult);

/*
* Output: Your result:  Get result after 1 second
* */
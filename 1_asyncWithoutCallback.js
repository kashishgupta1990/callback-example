/*
* Async Function
* */
function asyncFunction(){
    var result;
    setTimeout(function () {
        result = 'Get result after 1 second';
    },1000);
    return result;
}
/*
* Calling asyncFunction
* */
var finalResult = asyncFunction();
console.log('Your result: ', finalResult);

/*
* Output: Your result:  undefined
* */
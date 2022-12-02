function holler() {
    console.log("hey youuy")
}

const whisper = function() {
    console.log("psttt  I have a secrete")

}

function add(x,y) {
    return x + y;
}

function subtract(x,y) {
    return x-y;
}

function multiply(x,y) {
    return x * y;
}

function divide(x,y) {
   return x / y;
}

function power(x,y) {
    return x ** y;
}

const mathFuncs = [add, subtract, multiply, divide, power];

setTimeout(whisper, 1000)


function doMath(a,b,mathFunc) {
    return mathFunc(a,b)
}


doMath(5,6, function(a,b) {
    console.log(a ** b);
});


function doAllMath(a, b, mathFuncs) {
    

    for(let func of mathFuncs) {
        console.log(func(a,b))
    }
}

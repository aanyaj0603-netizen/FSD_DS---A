function sum(a,b){
    return a+b;
}

function multiply(a,b){
    return a*b;
}

function sumwithmsg(callback, msg){
    const result = callback(2, 3);
    const fresult = "hi " + msg + "Your score is: " + result;
    console.log(fresult);
}
sumwithmsg(sum, "Mr.Deepak, ");
sumwithmsg(multiply, "Mr.Sunil, ");
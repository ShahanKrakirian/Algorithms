function iFactorial(num){

    //If not a number
    if (typeof num !== 'number'){
        return "Enter a number.";
    }

    // Start point
    var total = 1;

    //If 0
    if (num == 0){
        return 0;
    }

    //If negative
    if (num < 0){
        for (var i=num; i<0; i++){
            total *= i;
        }
    //If positive
    } else {
        for (var i=num; i>0; i--){
            total *= i
            console.log(total);
        }
    }
    return total;
}
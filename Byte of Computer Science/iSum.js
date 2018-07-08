function iSum(num){

    //If not a number
    if (typeof num !== 'number'){
        return "Enter a number.";
    }

    // Start point
    var sum = 0;

    //If negative
    if (num < 0){
        for (var i=0; i=>num; i--){
            sum += i;
        }
    //If positive
    } else {
        for (var i=0; i<=num; i++){
            sum += i
            console.log(sum);
        }
    }
    return sum;
}
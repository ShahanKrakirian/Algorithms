function rFactorial(num){

    //If not a number
    if (typeof num !== 'number'){
        return "Enter a number.";
    }

    //In case of 0 input
    if (num == 0){
        return 0;
    }

    //Base case 
    if (num == 1){
        return 1;
    } 
    else if (num == -1){
        return -1;
    }

    //Recursive call for positive num
    if (num > 0){
        return rFactorial(num - 1) * num;
    }

    //Recursive call for negative num
    else {
        return rFactorial(num + 1) * num;
    }
}
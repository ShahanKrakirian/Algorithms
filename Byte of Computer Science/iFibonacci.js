function iFibonacci(num){

    //If bad data
    if (num < 0){
        return "Enter a positive number.";
    }

    var arr = [0, 1];

    for (var i=0; i<num; i++){
        arr.push(arr[0] + arr[1]);
        arr.shift();
        console.log(arr);
    }

    return arr[0];
  
}
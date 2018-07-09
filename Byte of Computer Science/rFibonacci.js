function rFibonacci(num){

    //If bad data
    if (num < 0){
      return "Enter a positive number.";
    }
  
    if (num == 0){
      return 0;
    }
    if (num == 1){
      return 1;
    }
  
    return rFibonacci(num - 2) + rFibonacci(num - 1);
  
  }
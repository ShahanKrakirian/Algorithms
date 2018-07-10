function rBS(arr, low, high, x){

    mid = Math.floor((low + high)/2);
  
    //Base case
    if (low > high){
      return -1;
    }
  
    //Cutting second half
    if (arr[mid] > x){
      return rBS(arr, low, mid - 1, x);
    //Cutting first half
    } else if (arr[mid] < x) {
      return rBS(arr, mid + 1, high, x);
    //Value found
    } else {
      return mid;
    }
  }
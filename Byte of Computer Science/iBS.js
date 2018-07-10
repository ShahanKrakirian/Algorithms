function iBS(arr, x){

    low = 0;
    high = arr.length - 1;
    mid = Math.floor(arr.length/2);
  
    while (high >= low){
  
      if (arr[mid] == x){
        return mid;
      }
      else if (arr[mid] > x){
        high = mid - 1;
        mid = Math.floor(low + high / 2);
      }
      else {
        low = mid + 1;
        mid = Math.floor(low + high / 2);
      }
      
    }
  
    return -1;
  
  }
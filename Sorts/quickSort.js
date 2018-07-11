function quickSort(arr){

    if (arr.length < 2){
      return arr;
    }
  
    var pivot = arr[0];
    var left = [];
    var right = [];
  
    for (var i=1; i<arr.length; i++){
      if (arr[i] < pivot){
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    } 
  
    left.push(pivot);
  
    return quickSort(left).concat(quickSort(right));
    
  }
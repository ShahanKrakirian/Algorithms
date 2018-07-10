function bubbleSort(arr){

    if (arr.length == 1){
      return arr;
    }
  
    var temp;
    var swapped = true;
    var count = 1
  
    while (swapped == true){
    swapped = false;
    
    for (var i=0; i<arr.length - count; i++){
      if (arr[i] > arr[i+1]){
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        swapped = true;
      }
    }

    count += 1;
    }
    
    return arr;
}
function selectionSort(arr){

    if (arr.length == 1){
      return arr;
    }
  
    var swapped = true;
    var count = 0;
    var currMin;
    var temp;
  
    //Continue looping until we haven't swapped anything
    while (count < arr.length){
      swapped = false;
      currMin = arr[count];
      
      //For each item in arr, loop through the rest of arr
      for (var i=count+1; i<arr.length; i++){
        //If the current min is greater than value, swap
        if (arr[i] < currMin) {
          currMin = arr[i];
          minIndex = i;
          swapped = true;
        }
      }
      if (swapped == true){
        temp = arr[count];
        arr[count] = arr[minIndex];
        arr[minIndex] = temp;
      }
      count++;
    }
    return arr;
  }
function insertionSort(arr){

  if (arr.length == 1){
    return arr;
  }
  
  var j;
  var temp;

  //For length of array, starting at index 1
  for (var i=1; i<arr.length; i++){
    j = i;
    temp = arr[i];

    //Move unsorted item into sorted list, swapping along the way
    while ( j>0 && arr[j-1] > temp){
      arr[j] = arr[j-1];
      j--;
      arr[j] = temp;
    }
  }
  return arr;
}
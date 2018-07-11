function mergeSort(arr){

    if (arr.length < 2){
      return arr;
    }
  
    var left = arr.slice(0, Math.floor(arr.length/2));
    var right = arr.slice(Math.floor(arr.length/2));
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge (left, right) {
    let result = []
    let indexLeft = 0
    let indexRight = 0
  
    while (indexLeft < left.length && indexRight < right.length) {
      if (left[indexLeft] < right[indexRight]) {
        result.push(left[indexLeft])
        indexLeft++
      } else {
        result.push(right[indexRight])
        indexRight++
      }
    }
  
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
  }
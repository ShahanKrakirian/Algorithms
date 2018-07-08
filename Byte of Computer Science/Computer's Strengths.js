function find(num, arr){
	for (var i=0; i<arr.length; i++){
		if (arr[i] == num){
			return i;
		}
	}
	return -1;
}
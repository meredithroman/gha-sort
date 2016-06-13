function bubbleSort(arr) {
/*	if(typeof arr !== "array") {
		throw new Error("Not an array");
	}*/
	var swapcount = 0;
	for(var i = 0, j = 1; j < arr.length; i++, j++) {
		
		if(compare(arr[i], arr[j])) {
			swap(arr, i, j);
			swapcount++;
		}

	}
	if(swapcount === 0) {
		return arr;
	}
	else {
		return bubbleSort(arr);
	}
}

function compare(first, second) {
	return first > second;
}

function swap(arr, firstIdx, secondIdx) {
	var temp = arr[firstIdx];
	arr[firstIdx] = arr[secondIdx];
	arr[secondIdx] = temp;
}
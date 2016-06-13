function mergeSort(array) {
	if(!array.length) {
		return array;
	}
	var arraySplit = split(array);
	var arr1 = arraySplit[0];
	var arr2 = arraySplit[1];
	if(arr1.length === 1 && arr2.length === 1) {
		return merge(arr1, arr2);
	}
	else { 
		if(arr1.length !== 1) {
			arr1 = mergeSort(arr1);
		}
		if(arr2.length !== 1) {
			arr2 = mergeSort(arr2);
		}
	}
	return merge(arr1, arr2);
}

function split(array) {
	var splitIdx = array.length / 2;
	var splitIdx = Math.ceil(splitIdx);
	return [array.slice(0, splitIdx), array.slice(splitIdx)];
}

function merge(arr1, arr2) {
	var combined = [];
	while(arr1.length && arr2.length) {
		if (arr1[0] < arr2[0]) {
			combined.push(arr1.shift());
		} else if (arr1[0] > arr2[0]) {
			combined.push(arr2.shift());
		} else {
			combined.push(arr1.shift());
			combined.push(arr2.shift());
		}
	}
	if (arr1.length) {
		combined = combined.concat(arr1);
	} else if (arr2.length) {
		combined = combined.concat(arr2);
	}
	return combined;
}
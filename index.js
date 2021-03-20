const countingSort = (arr) => {

	// We get the size of the input array so we can create the output based on this.
	const n = arr.length;

	// We get the maximum value from inside the given input array.
	const range = arr.reduce((acc, val) => acc > val ? acc : val, 0);

	// Creating our helper array based on the maximum value, 
	// also, initialize it with zeros on all its indices.
	const countArr = Array.from({length: range + 1}, () => 0);

	// Creating output array with the size of input array.
	const outputArr = Array.from({length: n}, () => undefined);

	// We iterate from zero index of input array until its length,
	// so we can map each input array value to countArr indexes.
	for (let i = 0; i < n; i++) {
		// Additioning 1 in countArray each time we find x index inside the input array
		++countArr[arr[i]];
	}

	// We sum accumulatively from index 1 to range 
	// (maximum value inside input array).
	for (let i = 1; i <= range; i++) {
		// Calculation would be value on index 1 pluse vale on  index -1 (1 + (-1))
		countArr[i] = countArr[i] + countArr[i - 1];
	}

	// We add the values from input array into output array based on the items from
	// our helper array (count array)
	for(let i = n - 1; i >= 0; i--) {
		// Value of count array current index (array[i]) - 1 would be the position of 
		// Value of input array on the current index (i)
		outputArr[--countArr[arr[i]]] = arr[i];
	}

	return outputArr;

}

const arrTest = [6, 4, 7, 2, 78, 98, 34, 9, 4, 5, 1, 8, 7, 4, 2, 6, 5];

const res = countingSort(arrTest);

console.log(res);
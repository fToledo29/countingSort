const countingSort = (arr) => {

	const n = arr.length;

	const range = arr.reduce((acc, val) => acc > val ? acc : val, 0);

	const countArr = Array.from({length: range + 1}, () => 0);

	const outputArr = Array.from({length: n}, () => 0);


	for (let i = 0; i < n; i++) {
		++countArr[arr[i]];
	}

	for (let i = 1; i <= n; i++) {
		countArr[i] = countArr[i] + countArr[i - 1];
	}

	for(let i = n - 1; i >= 0; i--) {
		outputArr[--countArr[arr[i]]] = arr[i];
	}

	return outputArr;

}

const arrTest = [6, 4, 7, 2, 9, 4, 5, 1, 8];

const res = countingSort(arrTest);

console.log(res);
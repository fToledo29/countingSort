const countingSort = (arr) => {

	const n = arr.length;

	const range = arr.reduce((acc, val) => acc > val ? acc : val, 0);

	return range;

}

const arrTest = [6, 4, 7, 2, 9, 4, 5, 1, 8];

countingSort(arrTest);
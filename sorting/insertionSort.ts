export const insertionSort = (items = [5, 2, 4, 6, 1, 3]) => {
	const arr = [...items];
	for (let j = 1; j < arr.length; j++) {
		const n = arr[j];
		let i = j - 1;
		while (i >= 0 && arr[i] > n) {
			arr[i + 1] = arr[i];
			i--;
		}

		arr[i + 1] = n;
	}

	return arr;
};

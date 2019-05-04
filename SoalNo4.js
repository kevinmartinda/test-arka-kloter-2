const sortingArray = (array) => {
	const sortedArray = []

	array.sort((x, y) => {
		  if (x.length < y.length)
		     return -1;
		  if (x.length > y.length)
		     return 1;
	})

	array.map((item) => {
		sortedArray.push(item.sort())
	})

	console.log(sortedArray)
}

const data = [['b', 'a', 'g', 'c', 'f' , 'e', 'd'], ['d', 'c', 'a', 'f']]
const datalain = [['b', 'a', 'g', 'c', 'f' , 'e', 'd'], ['f', 'g', 'a'], ['d', 'c', 'a', 'f']]

sortingArray(data)
sortingArray(datalain)
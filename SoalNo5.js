const cetakRandom = (param) => {
	const data = []

	for (let i = 0; i < param; i++) {
		data.push(cetak())
	}

	data.filter((v,i) => data.indexOf(v) === i)
	
	while(data.length < 3){
		console.log('there is duplicates')
		data.push(cetak())
		data.filter((v,i) => data.indexOf(v) === i)
	}

	data.map((item) => {
		console.log(item)
	})
}

const cetak = () => {
	let result = ''
	const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		for (let j = 0; j < 32; j++) {
			result += chars.charAt(Math.floor(Math.random() * chars.length))
		}
	return result
}

cetakRandom(3)
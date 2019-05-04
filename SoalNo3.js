const cetakGambar = (param) => {
	for(let i = 0; i< param; i++){
		for (let j = 0; j < param; j++) {
			if (i == (param-1) /2) {
				document.write("*" + " ")
			} else if (j == 0 || j == param - 1){
				document.write("*" + " ")
			} else {
				document.write("=" + " ")
			}
		}
		document.write("<br />")
	}
}

cetakGambar(5)
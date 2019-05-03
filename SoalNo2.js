const isUsernameValid = (param) => {
	if(param.length == 8){
	let count = 0

		count += /[a-z]/.test(param)
		count += !/[A-Z]/.test(param)
		count += !/[0-9]/.test(param)
	
		if (count == 3){
			return true
		} else {
			return false
		}
	} else {
		return false
	}
}

const isPasswordValid = (param) => {
let count = 0

	count += /[a-z]/.test(param)
	count += /[A-Z]/.test(param)
	count += /[0-9]/.test(param)
	count += /[&.\-_]/.test(param)
	count += /[a-zA-Z0-9*.\-_]{8,}/.test(param)

	console.log(count)

	if (count == 5){
		return true
	} else {
		return false
	}
}

isUsernameValid('zeronull')
isUsernameValid('zerooke')
isPasswordValid('qazW_123')
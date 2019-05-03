const x = (name, address, hobbies, is_married, school, skills) => {
	return {name, address, hobbies, is_married, school, skills}
}

console.log(x("marvin", "Purbalingga", ['watch anime', 'some hobbies2'], false, {key: "highSchool"}, ["PHP, JS, MYSQL"]))
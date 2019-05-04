const x = (name, address, hobbies, is_married, school, skills) => {
	const obj = {name, address, hobbies, is_married, school, skills}
	return JSON.stringify(obj)
}

console.log(x("marvin", "Purbalingga", ['watch anime', 'some hobbies2'], false, {key: "highSchool"}, [{PHP:"Sedang"}, {JS:"sedang"}, {MYSQL:"Lumayan"}]))

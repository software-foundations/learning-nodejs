// Way 01 to export an object

function Person () {

	this.age = 0

	setInterval( () => {

		this.age++

		console.log(this.age)

	}, 1000)
}

new Person
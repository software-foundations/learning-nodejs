function greeting(name) {
	console.log('greeting registered by use middleware')
	return function(req, res, next) {
		console.log('some request was made')
		console.log(`You are wellcome, ${name}`)
		next()
	}
}

module.exports = greeting
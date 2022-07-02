function save(req, res) {
	res.send('User > save')
}

function get(req, res) {
	console.log('>>>')
	res.send('User > get')
}

module.exports = { save, get }
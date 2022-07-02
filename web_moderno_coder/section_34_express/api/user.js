function save(req, res) {
	res.send('User > save')
}

function get(req, res) {
	res.send('User > get')
}

module.exports = { save, get }
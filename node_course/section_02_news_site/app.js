var app = require('./config/server')

app.get('', function(req, res) {

	res.render('home/index')

})

app.get('/form_add_news', function(req, res) {

	// render form_add_news.ejs
	res.render('admin/form_add_news')

})

app.get('/news', function(req, res) {

	res.render('news/news')

})

app.listen(3000, function(){

	console.log('server runing with express')

})

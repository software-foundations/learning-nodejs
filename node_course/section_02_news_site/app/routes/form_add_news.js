module.exports = function (app) {

	app.get('/form_add_news', function(req, res) {

		// render form_add_news.ejs
		res.render('admin/form_add_news')

	})	
}

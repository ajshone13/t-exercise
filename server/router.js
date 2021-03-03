const express = require('express');
const router = express.Router();

// redirect to specific url
router.get('/', (req , res) => {
	res.redirect('/einstein-and-churchill-both-took-daily-naps');
});

router.get('/einstein-and-churchill-both-took-daily-naps', (req, res) => {
	res.render("home", {
		meta: req.app.get('meta'),
		article: req.app.get('article'),
		related: req.app.get('related')
	});
});

module.exports = router;

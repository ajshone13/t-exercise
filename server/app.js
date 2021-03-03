const express = require('express');
const exphbs  = require('express-handlebars');
const router = require('./router');

// data
const meta = require("./content/meta.json");
const article = require("./content/article.json");
const related = require("./content/posts.json");

const app = express();
const port = 3000;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// formatting date helper
var hbs = exphbs.create({});
hbs.handlebars.registerHelper('dateFormat', require('handlebars-dateformat'));

app.set('meta', meta);
app.set('article', article.post);
app.set('related', related.posts);

app.use('*/static', express.static('public'));

app.use(router);

app.listen(port, () => console.log(`Listening on port ${port}!`));

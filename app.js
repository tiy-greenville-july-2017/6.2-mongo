var express = require('express');
var handlebars = require('express-handlebars');
var router = require('./routes');
var mongo = require('./mongoutils');

var app = express();

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

router(app);

// Connect to the database and start the server once the connection is made
mongo.connect('mongodb://localhost:27017/restaurantdb', () => {
  app.listen(3000);
});

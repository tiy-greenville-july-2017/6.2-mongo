var express = require('express');
var RestaurantController = require('./controllers/restaurant');


module.exports = function(app){
  var restaurantRouter = express.Router();

  restaurantRouter.get('/', RestaurantController.list);

  app.use('/restaurant', restaurantRouter);
};

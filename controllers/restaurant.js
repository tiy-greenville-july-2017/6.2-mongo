var Restaurant = require('../models/restaurant');

var RestaurantController = {
  list: function(req, res){
    Restaurant.getTopPicks(function(err, results){
      console.log('err', err);
      res.render('restaurant/list', {models: results});
    });
  }
};

module.exports = RestaurantController;

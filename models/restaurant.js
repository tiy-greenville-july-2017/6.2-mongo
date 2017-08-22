
var Restaurant = {
  getTopPicks: function(callback){
    // get the database connection
    let db = require('../mongoutils').db;

    db.collection('restaurants')
      .find({cuisine: {$in: ["Thai", "Vietnamese"]}})
      .sort({"grades.0.grade": 1, "name": 1})
      .limit(10)
      .toArray(callback);
  }
};

module.exports = Restaurant;

var mongoose = require("mongoose");

mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;



var AuctionSchema = new Schema({
  product_name: {type: String},
  product_id: Number,
  cat_name: {type: String, default: ''},
  cat_id: Number,
  product_starting_bid: {type: Number},
  image_type: {type: [String], default: ['jpg', 'png']},
  max_image_count: {type: Number, default: 5},
  default_duration: {type: Number, default: 3},
  current_bid: {type: Number, default: ''},
  bid_id: {type: Number},
  max_bid_count: {type: Number, default: 5},
  step_price: {type: Number, default: 1}

})


var Auction = mongoose.model('Configuration', AuctionSchema)

function createAuction(options = {}) {
  return new Promise(function(resolve, reject) {



module.exports = {

  setAuction: function(options = {}) {
    return new Promise(function(resolve, reject) {
      Auction.find({}, function(err, auction) {
        if(err) return reject(err);

        if(auction.length == 1) {
          var c = auction[0];
          if(options.currentcy_code) c.currency_code == options.currency_code;
          if(options.max_watch_list) c.max_watch_list = options.max_watch_list;
          if(options.max_bid_count) c.max_bid_count = options.max_bid_count;
          if(options.max_offer_count) c.max_offer_count = options.max_offer_count;
          if(options.default_duration) c.default_duration = options.default_duration;
          if(options.image_size) c.image_size = options.image_size;
          if(options.max_image_count) c.max_image_count = options.max_image_count;
          if(options.image_type) c.image_type = options.image_type;
          if(options.step_price) c.step_price = options.step_price;


          c.save(function (err) {
            if (err) reject(err);
            else resolve(c);
          });


        } else if(auction.length > 1) {
          Auction.remove({}, function(err) {
            if(err) return reject(err);

            createAuction(options).then(
              function(c) {
                resolve(c)

              },
              function (err) {
                reject(err);
              }
            );
          });
        } else {

          createAuction(options).then(
            function(c) {
              resolve(c)

            },
            function (err) {
              reject(err);
            }
          );
        }
      });
    });
  },


  loadAuction: function() {
    return new Promise(function(resolve, reject) {
      Auction.find({}, function(err, configs) {
        if(err) return reject(err);
        if(auction.length > 1) return reject("Too many auction count("+auction.length+"), need only one auction doc");
        if(auction.length == 0) {
          createAuction({}).then(
            function(c) {
              resolve(c)

            },
            function (err) {
              reject(err);
            }
          );

        } else if(auction.length == 1) {
          resolve(auction[0]);



        }
      });
    });
  },
};

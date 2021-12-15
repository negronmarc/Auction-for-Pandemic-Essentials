var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;

var ConfigSchema = new Schema({
  currency_code: {type: String, default: 'USD'},        // default currency code for bid/offer
  max_watch_list: {type: Number, default: 5},           // maximum number of item watching
  max_bid_count: {type: Number, default: 5},            // maximum number of bidding at the same time
  max_offer_count: {type: Number, default: 5},          // maximum number of offering at the same time
  default_duration: {type: Number, default: 3},         // number of days for posting offered item
  image_size: {type: Number, default: 200*1024},        // image size to be loaded
  max_image_count: {type: Number, default: 5},          // maximum number of images per item
  image_type: {type: [String], default: ['jpg', 'png']},// allowed type of image
  step_price: {type: Number, default: 1}           // step price value for bidding
});
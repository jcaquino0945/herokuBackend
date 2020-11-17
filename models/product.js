var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Product = new Schema({
    name: {
        type:String,
        required:true,
    },
    description: {
        type:String,
        required:true,
    },
    image: {
        type:String,
        required:true,
    },
    price: {
        type:Number,
        required:true,
    },
    category: {
        type:String,
        required:true,
    },
    orders: {
        type:Number,
    },
    featured: {
        type:Boolean,
        default:false
    },

})
module.exports = mongoose.model('Product', Product);
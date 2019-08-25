
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {type: String, required: [true, "*** Required ***"]} ,
    price: {type: Number, required: [true, "*** Required ***"]} ,
    imgUrl: {type: String, required: [true, "*** Required ***"]} ,
}, {timestamps: true});

mongoose.model('Product', ProductSchema);

// getting-started.js


const mongoose = require('mongoose');

const OrederSchema = new mongoose.Schema({ 
    UserId: {type: String, required: true},
    products: [{
            productId: {type: String},
            quantity: {type: Number, default: 1} 
        }],

    address: {type: String, required: true},
    amount: {type: Number, required: true},
    status: {type: String, default: 'Pending',  required: true},

 }, {timestamps: true});
 mongoose.models = {}

 export default mongoose.model("Order", OrederSchema);

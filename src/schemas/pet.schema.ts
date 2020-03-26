var mongoose = require('mongoose');
var Schema = mongoose.Schema;

export const PetSchema = new Schema({
    name: String,
    kind: String,
    breed: String,
    vaccines: [{
        name: String
    }],
    customer: { type: Schema.ObjectId, ref: "Customer" } 
});
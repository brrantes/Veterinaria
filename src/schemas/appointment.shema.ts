var mongoose = require('mongoose');
var Schema = mongoose.Schema;

export const appointmentSchema = new Schema({
    pet: { type: Schema.ObjectId, ref: "Pet" },
    vet: { type: Schema.ObjectId, ref: "Vet"},
    date: Date,
    detail: String
});
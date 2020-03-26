import { Schema } from "mongoose";

export const PetSchema = new Schema({
    name: String,
    kind: String,
    breed: String,
    vaccines: [{
        type: String
    }]
});
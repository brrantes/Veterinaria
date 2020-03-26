import { Schema } from "mongoose";

export const VetSchema = new Schema({
    name: String,
    lastName: String,
    specialty: String,
    phoneNumber: String
});
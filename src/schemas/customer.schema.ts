import { Schema } from "mongoose";

export const CustomerSchema = new Schema({
    name: String,
    lastName: String,
    phoneNumber: String
});
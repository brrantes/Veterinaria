import {Document} from "mongoose"

export interface ICustomer extends Document{
    name: string;
    lastName: string;
    phoneNumber: string;
}
import {Document} from "mongoose"

export interface ICustomer extends Document{
    readonly name: string;
    readonly lastName: string;
    readonly phoneNumber: string; 
}
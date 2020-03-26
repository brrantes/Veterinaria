import {Document} from "mongoose"

export interface IVet extends Document{
    readonly name: string 
    readonly lastName: string;
    readonly specialty: string;
    readonly phoneNumber: string; 
}
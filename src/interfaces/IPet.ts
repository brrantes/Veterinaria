import {Document} from "mongoose"

export interface IPet extends Document{
    readonly name: string 
    readonly kind: string;
    readonly breed: string;
    readonly vaccines: string[]; 
}
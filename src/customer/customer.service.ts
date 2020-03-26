import { Injectable } from '@nestjs/common';
import { ICustomer } from '../interfaces/ICustomer'
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { CreateCustomerDTO } from "../dto/customer.dto"

@Injectable()
export class CustomerService {

    constructor(@InjectModel("Customer") private customerModel : Model<ICustomer>){}

    async getCustomers() : Promise<ICustomer[]> {
        return await this.customerModel.find();
    }

    async getCustomer(name: string) : Promise<ICustomer[]> {
        return await this.customerModel.find({ name: name});
    }

    async createCustomer(customer : CreateCustomerDTO) {
        const newCustomer = new this.customerModel(customer);
        await newCustomer.save();
    }

    async deleteCustomer(customerId : string) : Promise<ICustomer> {
        const deletedCustomer = await this.customerModel.findByIdAndDelete(customerId);
        return deletedCustomer;
    }   
    
    async updateCustomer(customerId : string, createCustomerDTO : CreateCustomerDTO) : Promise<ICustomer>{
        const updatedCustomer = await this
                                    .customerModel
                                    .findByIdAndUpdate(customerId, createCustomerDTO, {new: true});
        return updatedCustomer;
    }

}

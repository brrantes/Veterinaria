import { Injectable, HttpStatus } from '@nestjs/common';
import { ICustomer } from '../interfaces/ICustomer'
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"

//@Injectable()
export class CustomerService {

    //constructor(@InjectModel("Customer") private customerModel : Model<ICustomer>){}

    //async getCustomers(){
     //   return await this.customerModel.find();
    //}

    //async getCustomer(name: string) {
   //     return await this.customerModel.find(c => c.name == name);
  //  }

    

   // saveCustomer(customer: ICustomer) : any {
   //     return response.status(HttpStatus.OK);
        //return this.customer.find(c => c.name == "pr");
        //
   //// }

    //updateCustomer()

}

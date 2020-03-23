import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { saveCustomerDto } from "./../dto/customer.dto"
import { CustomerService } from './customer.service';
import { ICustomer } from '../interfaces/ICustomer'

@Controller('customer')
export class CustomerController {

  constructor(private customerService: CustomerService){}

  //@Get("getCustomers")
  //getCustomers(): Promise<ICustomer[]> {
   // return this.customerService.getCustomers();
  //}

  //@Get("getCustomer/:name")
  //getCustomer(@Param("name") name) : Promise<ICustomer[]>{
   // return this.customerService.getCustomer(name);
 // }

  //@Post("saveCustomer")
  //saveCustomer(@Body() customerDto : saveCustomerDto) : any {
  //    return this.customerService.saveCustomer(customerDto);
  //}

  @Put(":name")
  updateCustomer(@Body() cliente : saveCustomerDto, @Param("name") name) : string{
      console.log(cliente);
      console.log(name);
    return "update";
  }

  @Delete(":name")
  deleteCustomer(@Param("name") name) : string{
    return `delete ${name}`;
  }



}

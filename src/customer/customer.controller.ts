import { Controller, Get, Post, Put, Delete, Body, Param, HttpStatus, NotFoundException } from '@nestjs/common';
import { CreateCustomerDTO } from "./../dto/customer.dto"
import { CustomerService } from './customer.service';
import { ICustomer } from '../interfaces/ICustomer'
import { response } from 'express';

@Controller('customer')
export class CustomerController {

  constructor(private customerService: CustomerService){}

  @Get("getCustomers")
  async getCustomers(): Promise<ICustomer[]> {
    return await this.customerService.getCustomers();
  }

  @Get("getCustomer/:name")
  async getCustomer(@Param("name") name : string) :  Promise<ICustomer[]>{
    const customer = await this.customerService.getCustomer(name);
    if (customer.length > 0) {
      return customer;
    }
    else{
      throw new NotFoundException("No existen clientes con ese nombre");
    }    
  }

  @Post("createCustomer")
  createCustomer(@Body() createCustomerDto : CreateCustomerDTO) : any {
      this.customerService.createCustomer(createCustomerDto);
      return response.status(HttpStatus.OK);
  }

  @Delete("deleteCustomer/:customerId")
  async deleteCustomer(@Param("customerId") customerId : string) : Promise<ICustomer>{
    const deletedCustomer = await this.customerService.deleteCustomer(customerId);
    if (deletedCustomer) {
      return deletedCustomer;
    }
    else{
      throw new NotFoundException("No existen clientes con ese ID");
    }
  }

  @Put("updateCustomer/:customerId")
  async updateCustomer(@Param("customerId") customerId, @Body() createCustomerDTO : CreateCustomerDTO) : Promise<ICustomer>{
    const updatedCustomer = await this.customerService.updateCustomer(customerId, createCustomerDTO);
    if (updatedCustomer) {
      return updatedCustomer;
    }
    else{
      throw new NotFoundException("No existen clientes con ese ID");
    }
  }

}

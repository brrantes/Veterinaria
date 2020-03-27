import { Module } from '@nestjs/common';
import { CustomerService } from "./customer.service"
import { CustomerController } from "./customer.controller"
import { MongooseModule } from "@nestjs/mongoose"
import { CustomerSchema } from "./../schemas/customer.schema"
import { CustomerGateway } from './customer.gateway';

@Module({
    imports: [MongooseModule.forFeature([
        {name: "Customer", schema: CustomerSchema}
    ])],
    controllers: [CustomerController],
    providers: [CustomerService, CustomerGateway]
})
export class CustomerModule {}
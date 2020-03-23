import { Module } from '@nestjs/common';
import { CustomerService } from "./customer.service"
import { CustomerController } from "./customer.controller"
import { MongooseModule } from "@nestjs/mongoose"
import { CustomerSchema } from "./../schemas/customer.schema"

@Module({
    imports: [],
    controllers: [CustomerController],
    providers: [CustomerService]
})
export class CustomerModule {}
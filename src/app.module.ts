import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerController } from './customer/customer.controller';
import { CustomerService } from './customer/customer.service';
import { CustomerModule } from './customer/customer.module';
import { MongooseModule } from "@nestjs/mongoose"

@Module({
  imports: [CustomerModule, MongooseModule.forRoot("mongodb+srv://abarrantes:abarrantes123*@cluster0-36mak.mongodb.net/test?retryWrites=true&w=majority")],
  controllers: [AppController, CustomerController],
  providers: [AppService, CustomerService],
})
export class AppModule {}
//MongooseModule.forRoot("mongodb+srv://abarrantes:abarrantes123*@cluster0-36mak.mongodb.net/test?retryWrites=true&w=majority")

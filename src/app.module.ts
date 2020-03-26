import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { MongooseModule } from "@nestjs/mongoose"
import { PetController } from './pet/pet.controller';
import { PetService } from './pet/pet.service';

@Module({
  imports: [CustomerModule, MongooseModule.forRoot("mongodb+srv://abarrantes:abarrantes123*@cluster0-36mak.mongodb.net/test?retryWrites=true&w=majority")],
  controllers: [AppController, PetController],
  providers: [AppService, PetService],
})
export class AppModule {}

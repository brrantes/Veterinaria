import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { MongooseModule } from "@nestjs/mongoose"
import { PetModule } from './pet/pet.module';
import { VetModule } from './vet/vet.module';

@Module({
  imports: [CustomerModule
          , PetModule
          , VetModule
          , MongooseModule.forRoot('mongodb://localhost:27017/nest')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
//MongooseModule.forRoot("mongodb+srv://abarrantes:abarrantes123*@cluster0-36mak.mongodb.net/test?retryWrites=true&w=majority")
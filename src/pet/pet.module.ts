import { Module } from '@nestjs/common';
import { PetService } from "./pet.service"
import { PetController } from "./pet.controller"
import { MongooseModule } from "@nestjs/mongoose"
import { PetSchema } from "./../schemas/pet.schema"
import { CustomerSchema } from "./../schemas/customer.schema"

@Module({
    imports: [MongooseModule.forFeature([
        {name: "Pet", schema: PetSchema}
        //,{name: "Customer", schema: CustomerSchema}
    ])],
    controllers: [PetController],
    providers: [PetService]
})
export class PetModule {}
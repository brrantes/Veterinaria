import { Module } from '@nestjs/common';
import { PetService } from "./pet.service"
import { PetController } from "./pet.controller"
import { MongooseModule } from "@nestjs/mongoose"
import { PetSchema } from "./../schemas/pet.schema"
import { PetGateway } from './pet.gateway';

@Module({
    imports: [MongooseModule.forFeature([
        {name: "Pet", schema: PetSchema}
    ])],
    controllers: [PetController],
    providers: [PetService, PetGateway]
})
export class PetModule {}
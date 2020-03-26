import { Module } from '@nestjs/common';
import { VetService } from "./vet.service"
import { VetController } from "./vet.controller"
import { MongooseModule } from "@nestjs/mongoose"
import { VetSchema } from "./../schemas/vet.schema"

@Module({
  imports: [MongooseModule.forFeature([
      {name: "Vet", schema: VetSchema}
  ])],
  controllers: [VetController],
  providers: [VetService]
})
export class VetModule {}

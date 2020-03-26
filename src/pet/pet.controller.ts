import { Controller, Get, Post, Put, Delete, Body, Param, HttpStatus, NotFoundException } from '@nestjs/common';
import { PetService } from './pet.service';
import { CreatePetDTO } from "./../dto/pet.dto"
import { IPet } from '../interfaces/IPet'
import { response } from 'express';

@Controller('pet')
export class PetController {

    constructor(private petService: PetService){}

    @Get("getPets")
    async getPets(): Promise<IPet[]> {
    return await this.petService.getPets();
    }

    @Get("getPet/:name")
    async getPet(@Param("name") name : string) :  Promise<IPet[]>{
      const pet = await this.petService.getPet(name);
      if (pet.length > 0) {
        return pet;
      }
      else{
        throw new NotFoundException("No existen mascotas con ese nombre");
      }    
    }

    @Post("createPet")
    createPet(@Body() createPetDto : CreatePetDTO)  {
        this.petService.createPet(createPetDto);
        return response.status(HttpStatus.OK);
    }

    @Delete("deletePet/:petId")
        async deletePet(@Param("petId") petId : string) : Promise<IPet>{
        const deletedPet = await this.petService.deletePet(petId);
        if (deletedPet) {
          return deletedPet;
        }
        else{
          throw new NotFoundException("No existen mascotas con ese ID");
        }
    }

    @Put("updatePet/:petId")
        async updatePet(@Param("petId") petId, @Body() createPetDTO : CreatePetDTO) : Promise<IPet>{
        const updatedPet = await this.petService.updatePet(petId, createPetDTO);
        if (updatedPet) {
          return updatedPet;
        }
        else{
          throw new NotFoundException("No existen mascotas con ese ID");
        }
    }
}

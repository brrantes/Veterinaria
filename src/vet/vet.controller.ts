import { Controller, Get, Post, Put, Delete, Body, Param, HttpStatus, NotFoundException } from '@nestjs/common';
import { VetService } from './vet.service';
import { CreateVetDTO } from "./../dto/vet.dto"
import { IVet } from '../interfaces/IVet'
import { response } from 'express';

@Controller('vet')
export class VetController {

    constructor(private vetService: VetService){}

    @Get("getVets")
    async getPets(): Promise<IVet[]> {
    return await this.vetService.getVets();
    }

    @Get("getVet/:name")
    async getVet(@Param("name") name : string) :  Promise<IVet[]>{
      const vet = await this.vetService.getVet(name);
      if (vet.length > 0) {
        return vet;
      }
      else{
        throw new NotFoundException("No existen veterinarios con ese nombre");
      }    
    }

    @Post("createVet")
    createVet(@Body() createVetDto : CreateVetDTO)  {
        this.vetService.createVet(createVetDto);
        return response.status(HttpStatus.OK);
    }

    @Delete("deleteVet/:vetId")
        async deleteVet(@Param("vetId") vetId : string) : Promise<IVet>{
        const deletedVet = await this.vetService.deleteVet(vetId);
        if (deletedVet) {
          return deletedVet;
        }
        else{
          throw new NotFoundException("No existen veterinarios con ese ID");
        }
    }

    @Put("updateVet/:vetId")
        async updateVet(@Param("vetId") vetId, @Body() createVetDTO : CreateVetDTO) : Promise<IVet>{
        const updatedVet = await this.vetService.updateVet(vetId, createVetDTO);
        if (updatedVet) {
          return updatedVet;
        }
        else{
          throw new NotFoundException("No existen veterinarios con ese ID");
        }
    }
}

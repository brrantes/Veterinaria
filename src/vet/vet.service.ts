import { Injectable } from '@nestjs/common';
import { IVet } from '../interfaces/IVet'
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { CreateVetDTO } from "../dto/vet.dto"

@Injectable()
export class VetService {

    constructor(@InjectModel("Vet") private vetModel : Model<IVet>){}

    async getVets() : Promise<IVet[]> {
        return await this.vetModel.find();
    }

    async getVet(name: string) : Promise<IVet[]> {
        return await this.vetModel.find({ name: name});
    }

    async createVet(pet : CreateVetDTO) {
        const newVet = new this.vetModel(pet);
        await newVet.save();
    }

    async deleteVet(vetId : string) : Promise<IVet> {
        const deletedVet = await this.vetModel.findByIdAndDelete(vetId);
        return deletedVet;
    }

    async updateVet(vetId : string, createVetDTO : CreateVetDTO) : Promise<IVet>{
        const updatedVet = await this
                                .vetModel
                                .findByIdAndUpdate(vetId, createVetDTO, {new: true});
        return updatedVet;
    }
}
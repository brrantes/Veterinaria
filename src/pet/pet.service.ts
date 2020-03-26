import { Injectable } from '@nestjs/common';
import { IPet } from '../interfaces/IPet'
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { CreatePetDTO } from "../dto/pet.dto"

@Injectable()
export class PetService {

    constructor(@InjectModel("Pet") private petModel : Model<IPet>){}

    async getPets() : Promise<IPet[]> {
        return await this.petModel.find().populate("customer");
    }

    async getPet(name: string) : Promise<IPet[]> {
        return await this.petModel.find({ name: name});
    }

    async createPet(pet : CreatePetDTO) {
        const newPet = new this.petModel(pet);
        await newPet.save();
    }

    async deletePet(petId : string) : Promise<IPet> {
        const deletedPet = await this.petModel.findByIdAndDelete(petId);
        return deletedPet;
    }

    async updatePet(petId : string, createPetDTO : CreatePetDTO) : Promise<IPet>{
        const updatedPet = await this
                                .petModel
                                .findByIdAndUpdate(petId, createPetDTO, {new: true});
        return updatedPet;
    }
}

export class CreatePetDTO{
    readonly name: string 
    readonly kind: string;
    readonly breed: string;
    readonly vaccines: string[]; 
}
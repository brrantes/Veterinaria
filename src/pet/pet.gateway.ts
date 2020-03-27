import { SubscribeMessage, WebSocketGateway, WsResponse } from '@nestjs/websockets';
import { PetService } from './pet.service';
import { IPet } from 'src/interfaces/IPet';
import { Socket, Server } from 'socket.io'

@WebSocketGateway()
export class PetGateway {
  constructor(private readonly PetService: PetService){} 

  @SubscribeMessage('getPets')
  async findAll(pet: Socket, payload: any): Promise<WsResponse<IPet[]>>  {
    const result = await this.PetService.getPets();
    return { event: "getPets", data: result }
  }

  @SubscribeMessage('getPet')
  async findOne(client: Socket, payload : string ): Promise<WsResponse<IPet[]>>  {
    const result = await this.PetService.getPet(payload);
    return { event: "getPet", data: result }
  }
}

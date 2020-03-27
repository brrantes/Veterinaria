import { SubscribeMessage, WebSocketGateway, WsResponse } from '@nestjs/websockets';
import { VetService } from './vet.service';
import { IVet } from 'src/interfaces/IVet';
import { Socket, Server } from 'socket.io'

@WebSocketGateway()
export class VetGateway {
  constructor(private readonly VetService: VetService){} 

  @SubscribeMessage('getVets')
  async findAll(vet: Socket, payload: any): Promise<WsResponse<IVet[]>>  {
    const result = await this.VetService.getVets();
    return { event: "getVets", data: result }
  }

  @SubscribeMessage('getVet')
  async findOne(client: Socket, payload : string ): Promise<WsResponse<IVet[]>>  {
    const result = await this.VetService.getVet(payload);
    return { event: "getVet", data: result }
  }
}

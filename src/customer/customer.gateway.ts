import { SubscribeMessage, WebSocketGateway, WsResponse, OnGatewayDisconnect, OnGatewayConnection, OnGatewayInit } from '@nestjs/websockets';
import { CustomerService } from './customer.service';
import { ICustomer } from 'src/interfaces/ICustomer';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io'

@WebSocketGateway()
export class CustomerGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  constructor(private readonly customerService: CustomerService){} 
  private logger: Logger = new Logger("Customer Gateway");

  afterInit(server: Server) {
    this.logger.debug('Server running!');
  }

  handleDisconnect(client: Socket) {
    this.logger.debug(`Client disconnected:' ${client.id}`);
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.debug(`Client connected:' ${ client.id }`);
  }


  @SubscribeMessage('getCustomers')
  async findAll(client: Socket, payload: any): Promise<WsResponse<ICustomer[]>>  {
    const result = await this.customerService.getCustomers();
    return { event: "getCustomers", data: result }
  }

  @SubscribeMessage('getCustomer')
  async findOne(client: Socket, payload : string ): Promise<WsResponse<ICustomer[]>>  {
    const result = await this.customerService.getCustomer(payload);
    return { event: "getCustomer", data: result }
  }
}

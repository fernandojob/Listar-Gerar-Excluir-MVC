import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomersService } from "../services/ListCustomersService"


export class ListCustomersController{
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const ListCustomerService = new ListCustomersService()

    const customers = await ListCustomerService.execute()

    reply.send(customers)
  }  


}


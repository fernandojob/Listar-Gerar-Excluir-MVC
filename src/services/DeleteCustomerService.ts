import prismaClient from "../prisma"

interface DeleteCustomerProps{
  id: string
}

export class DeleteCustomerService{
  async execute({id} : DeleteCustomerProps) {

    if (!id) {
      throw new Error("Solicitação Invalida")
    }

    const findCustomer = await prismaClient.customer.findFirst({
      where: {
        id: id
      }
    })

    if (!findCustomer) {
      throw new Error("cliente nao existe")
    }

    await prismaClient.customer.delete({
      where: {
        id: findCustomer.id
      }
    })

    return { message: " Deletado com sucesso!"}

  }
}


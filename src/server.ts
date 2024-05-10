import Fastify from "fastify";
import cors from '@fastify/cors';
import { route } from "./routes";

const app = Fastify({ logger: true })

app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message})
})

const start = async () => {


  await app.register(cors);
  await app.register(route);

  try {
    await app.listen({ port: 3333})
  } catch (err) {
    process.exit(1)
  }
}


start();
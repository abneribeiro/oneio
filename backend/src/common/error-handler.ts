import { FastifyReply, FastifyRequest } from 'fastify';

export function errorHandler(error: Error, req: FastifyRequest, reply: FastifyReply) {
  reply.status(500).send({ error: error.message });
}
import { FastifyReply, FastifyRequest } from 'fastify';
import { UserService } from './user.service';

const userService = new UserService();

export class UserController {
  async createUser(req: FastifyRequest, reply: FastifyReply) {
    const user = await userService.createUser(req.body as any);
    reply.send(user);
  }
}
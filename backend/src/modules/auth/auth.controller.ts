import { FastifyReply, FastifyRequest } from 'fastify';
import { AuthService } from './auth.service';

const authService = new AuthService();

export class AuthController {
  async login(req: FastifyRequest, reply: FastifyReply) {
    const { username, password } = req.body as any;
    const token = await authService.login(username, password);
    reply.send({ token });
  }
}
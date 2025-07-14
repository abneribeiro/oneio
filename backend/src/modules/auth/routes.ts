import { FastifyInstance } from 'fastify';
import { AuthController } from './auth.controller';
import { LoginDto } from './login.dto';

const authController = new AuthController();

export async function authRoutes(app: FastifyInstance) {
  app.post('/auth/login', {
    schema: { body: LoginDto },
  }, authController.login.bind(authController));
}
import { FastifyInstance } from 'fastify';
import { UserController } from './user.controller';
import { CreateUserDto } from './create-user.dto';

const userController = new UserController();

export async function userRoutes(app: FastifyInstance) {
  app.post('/users', {
    schema: { body: CreateUserDto },
  }, userController.createUser.bind(userController));
}
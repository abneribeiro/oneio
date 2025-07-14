import { UserRepository } from './user.repository';

const userRepository = new UserRepository();

export class UserService {
  async createUser(data: any) {
    return userRepository.createUser(data);
  }
}
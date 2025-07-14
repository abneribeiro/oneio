import { AuthRepository } from './auth.repository';

const authRepository = new AuthRepository();

export class AuthService {
  async login(username: string, password: string): Promise<string> {
    const user = await authRepository.findUserByUsername(username);
    if (!user || user.password !== password) {
      throw new Error('Invalid credentials');
    }
    return 'mocked-jwt-token';
  }
}
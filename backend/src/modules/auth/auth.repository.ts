export class AuthRepository {
  private users = [
    { username: 'test', password: 'password' },
  ];

  async findUserByUsername(username: string) {
    return this.users.find(user => user.username === username);
  }
}
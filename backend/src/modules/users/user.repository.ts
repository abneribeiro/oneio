export class UserRepository {
  private users: any[] = [];

  async createUser(data: any) {
    const newUser = { id: this.users.length + 1, ...data };
    this.users.push(newUser);
    return newUser;
  }
}
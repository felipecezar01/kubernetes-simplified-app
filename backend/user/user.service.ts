import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async createUser(userData: { username: string; password: string }): Promise<{ message: string; data: { username: string; password: string } }> {
    // Lógica para criar o usuário, como salvar no banco de dados
    return {
      message: 'User registered successfully',
      data: userData,
    };
  }
}

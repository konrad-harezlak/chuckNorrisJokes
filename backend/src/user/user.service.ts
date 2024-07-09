import { Injectable } from '@nestjs/common';

interface User {
  id: number;
  email: string;
  password: string;
}

@Injectable()
export class UserService {
  private users: User[] = [{ id: 1, email: 'admin@admin.com', password: 'admin' }];
  private userIdCounter = 2;

  async register(email: string, password: string): Promise<void> {
    const newUser: User = {
      id: this.userIdCounter++,
      email,
      password,
    };
    this.users.push(newUser);
  }

  async findByEmailAndPassword(email: string, password: string): Promise<User | undefined> {
    const user = this.users.find(u => u.email === email && u.password === password);
    return user;
  }

  async findById(userId: number): Promise<User | undefined> {
    const user = this.users.find(u => u.id === userId);
    return user;
  }
}

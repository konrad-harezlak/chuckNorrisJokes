import { Injectable } from '@nestjs/common';

interface User {
  id: number;
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  private users: User[] = [{id: 0, email:'admin@admin.com',password:'admin'}];
  private userIdCounter: number = 1;

  async register(email: string, password: string): Promise<void> {
    const newUser: User = {
      id: this.userIdCounter++,
      email,
      password,
    };
    this.users.push(newUser);
  }

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = this.users.find(u => u.email === email && u.password === password);
    return user || null;
  }
}

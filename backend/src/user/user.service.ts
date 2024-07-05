import { Injectable } from '@nestjs/common';

interface User {
  id: number;
  email: string;
  password: string;
  jokes: string[];
}

@Injectable()
export class UserService {
  private users: User[] = [];
  private idCounter = 1;

  register(email: string, password: string): any {
    const userExists = this.users.find(user => user.email === email);
    if (userExists) {
      throw new Error('User already exists');
    }
    const newUser: User = {
      id: this.idCounter++,
      email,
      password,
      jokes: [],
    };
    this.users.push(newUser);
    return { message: 'User registered successfully', userId: newUser.id };
  }

  login(email: string, password: string): any {
    const user = this.users.find(
      user => user.email === email && user.password === password,
    );
    if (!user) {
      throw new Error('Invalid email or password');
    }
    return { message: 'Login successful', userId: user.id };
  }

  findById(userId: number): User | undefined {
    return this.users.find(user => user.id === userId);
  }
}

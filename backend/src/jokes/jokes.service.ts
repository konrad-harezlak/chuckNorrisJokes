import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { User } from '../user/user.entity';

@Injectable()
export class JokesService {
  constructor(private httpService: HttpService) {}

  async getRandomJoke(): Promise<string> {
    const response = await this.httpService.get('https://api.chucknorris.io/jokes/random').toPromise();
    return response.data.value;
  }

  async getJokeByCategory(category: string): Promise<string> {
    const response = await this.httpService.get(`https://api.chucknorris.io/jokes/random?category=${category}`).toPromise();
    return response.data.value;
  }

  async saveJoke(content: string, user: User): Promise<void> {
    if (!user.jokes) {
      user.jokes = [];
    }
    user.jokes.push(content);
  }

  async getJokes(user: User): Promise<string[]> {
    return user.jokes || [];
  }

  async deleteJoke(content: string, user: User): Promise<void> {
    if (!user.jokes) {
      return;
    }
    const index = user.jokes.indexOf(content);
    if (index !== -1) {
      user.jokes.splice(index, 1);
    }
  }
}

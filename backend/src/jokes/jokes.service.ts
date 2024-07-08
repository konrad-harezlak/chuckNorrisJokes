import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { User } from '../user/user.entity';

@Injectable()
export class JokesService {
  private userJokes: { [key: number]: string[] } = {};

  constructor(private httpService: HttpService) {}

  async getRandomJoke(): Promise<string> {
    const response = await this.httpService.get('https://api.chucknorris.io/jokes/random').toPromise();
    return response.data.value;
  }

  async getJokeByCategory(category: string): Promise<string> {
    const response = await this.httpService.get(`https://api.chucknorris.io/jokes/random?category=${category}`).toPromise();
    return response.data.value;
  }

  saveJoke(content: string, user: User): void {
    if (!this.userJokes[user.id]) {
      this.userJokes[user.id] = [];
    }
    this.userJokes[user.id].push(content);
  }

  getJokes(user: User): string[] {
    return this.userJokes[user.id] || [];
  }

  deleteJoke(id: number, user: User): void {
    if (this.userJokes[user.id] && this.userJokes[user.id][id]) {
      this.userJokes[user.id].splice(id, 1);
    }
  }
}

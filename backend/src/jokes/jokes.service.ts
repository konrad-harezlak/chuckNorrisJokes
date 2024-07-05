import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'
import axios from 'axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Joke } from './joke.entity';
import { User } from '../user/user.entity';

@Injectable()
export class JokesService {
  constructor(
    private httpService: HttpService,
    @InjectRepository(Joke)
    private jokesRepository: Repository<Joke>
  ) {}

  async getRandomJoke(): Promise<string> {
    const response = await this.httpService.get('https://api.chucknorris.io/jokes/random').toPromise();
    return response.data.value;
  }

  async getJokeByCategory(category: string): Promise<string> {
    const response = await this.httpService.get(`https://api.chucknorris.io/jokes/random?category=${category}`).toPromise();
    return response.data.value;
  }

  async saveJoke(content: string, user: User): Promise<Joke> {
    const joke = this.jokesRepository.create({ content, user });
    return this.jokesRepository.save(joke);
  }

  async getJokes(user: User): Promise<Joke[]> {
    return this.jokesRepository.find({ where: { user } });
  }

  async deleteJoke(id: number, user: User): Promise<void> {
    await this.jokesRepository.delete({ id, user });
  }

  async addJoke(content: string): Promise<any> {
    const response = await axios.post('http://localhost:3000/jokes/add', { content });
    return response.data;
  }

  async deleteJokeById(id: number): Promise<any> {
    const response = await axios.delete(`http://localhost:3000/jokes/delete/${id}`);
    return response.data;
  }
}

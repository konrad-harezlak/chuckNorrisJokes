import { Controller, Get, Post, Delete, Param, Query, Body, UseGuards, Request } from '@nestjs/common';
import { JokesService } from './jokes.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('jokes')
export class JokesController {
  constructor(private jokesService: JokesService) {}

  @Get('random')
  async getRandomJoke(@Query('category') category: string): Promise<string> {
    if (category) {
      return this.jokesService.getJokeByCategory(category);
    }
    return this.jokesService.getRandomJoke();
  }

  @UseGuards(JwtAuthGuard)
  @Post('save')
  async saveJoke(@Body('content') content: string, @Request() req): Promise<any> {
    return this.jokesService.saveJoke(content, req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('my-jokes')
  async getMyJokes(@Request() req): Promise<any> {
    return this.jokesService.getJokes(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('delete/:id')
  async deleteJoke(@Param('id') id: number, @Request() req): Promise<any> {
    return this.jokesService.deleteJoke(id, req.user);
  }
  
  @UseGuards(JwtAuthGuard)
  @Post('add')
  async addJoke(@Body() jokeData: { content: string }, @Request() req): Promise<any> {
    return this.jokesService.saveJoke(jokeData.content, req.user);
  }
  
}

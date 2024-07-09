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
  async saveJoke(
    @Body('content') content: string,
    @Request() req,
  ): Promise<any> {
    const userId = req.user.userId; 
    this.jokesService.saveJoke(content, userId);
    
    return { message: 'Joke saved successfully' };
  }

  @UseGuards(JwtAuthGuard)
  @Get('my-jokes')
  async getMyJokes(@Request() req): Promise<any> {
    return this.jokesService.getJokes(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('delete/:id')
  async deleteJoke(@Param('id') id: string, @Request() req): Promise<any> {
    const jokeId = parseInt(id, 10); 
    this.jokesService.deleteJoke(jokeId, req.user);
    return { message: 'Joke deleted successfully' };
  }

  @UseGuards(JwtAuthGuard)
  @Post('add')
  async addJoke(@Body() jokeData: { content: string }, @Request() req): Promise<any> {
    this.jokesService.saveJoke(jokeData.content, req.user);
    return { message: 'Joke added successfully' };
  }
}

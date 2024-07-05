import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'
import { TypeOrmModule } from '@nestjs/typeorm';
import { JokesService } from './jokes.service';
import { JokesController } from './jokes.controller';
import { Joke } from './joke.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Joke]), HttpModule],
  providers: [JokesService],
  controllers: [JokesController],
})
export class JokesModule {}

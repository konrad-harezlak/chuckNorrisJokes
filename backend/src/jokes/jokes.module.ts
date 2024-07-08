import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { JokesService } from './jokes.service';
import { JokesController } from './jokes.controller';

@Module({
  imports: [HttpModule],
  providers: [JokesService],
  controllers: [JokesController],
  exports: [JokesService], 
})
export class JokesModule {}

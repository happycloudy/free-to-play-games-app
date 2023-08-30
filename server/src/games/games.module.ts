import { Module } from '@nestjs/common';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';
import { ApiModule } from '../api/api.module';

@Module({
  controllers: [GamesController],
  providers: [GamesService],
  imports: [ApiModule],
})
export class GamesModule {}

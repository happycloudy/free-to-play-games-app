import { Module } from '@nestjs/common';
import { GameController } from './game.controller';
import { GameService } from './game.service';
import { ApiModule } from '../api/api.module';

@Module({
  controllers: [GameController],
  providers: [GameService],
  imports: [ApiModule],
})
export class GameModule {}

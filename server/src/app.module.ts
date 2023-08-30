import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GamesModule } from './games/games.module';
import { GameModule } from './game/game.module';
import { ApiModule } from './api/api.module';

@Module({
  imports: [GamesModule, GameModule, ApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

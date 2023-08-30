import { Controller, Get, Query } from '@nestjs/common';
import { GamesService } from './games.service';

@Controller('games')
export class GamesController {
  constructor(private gamesService: GamesService) {}

  @Get('/')
  fetchAllGames(@Query() params) {
    return this.gamesService.fetchAllGames({
      platform: params.platform,
      category: params.genre,
      sort_by: params['sort_by'],
    });
  }
}

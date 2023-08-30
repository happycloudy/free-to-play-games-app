import { Controller, Get, Query } from '@nestjs/common';
import { ApiService } from '../api/api.service';

@Controller('game')
export class GameController {
  constructor(private apiService: ApiService) {}

  @Get()
  async findOneById(@Query('id') id: string) {
    return this.apiService.findOneById(id);
  }
}

import { Injectable } from '@nestjs/common';
import { ApiService } from '../api/api.service';
import { FilterParamsType } from '../types/filter-params.type';

@Injectable()
export class GamesService {
  constructor(private apiService: ApiService) {}

  async fetchAllGames(params: FilterParamsType) {
    return await this.apiService.getAll(params);
  }
}

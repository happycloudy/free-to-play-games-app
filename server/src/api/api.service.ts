import { HttpException, Injectable } from '@nestjs/common';
import { Axios } from 'axios';
import { FilterParamsType } from '../types/filter-params.type';

@Injectable()
export class ApiService {
  client: Axios;

  constructor() {
    this.client = new Axios({
      baseURL: 'https://www.freetogame.com/api',
    });
  }

  async getAll(params: Partial<FilterParamsType>) {
    let query = Object.keys(params).length ? '?' : '';
    for (const param of Object.keys(params)) {
      if (params[param]) {
        query += `${param}=${params[param]}&`;
      }
    }
    query = query.slice(0, query.length - 1);

    try {
      const res = await this.client.get(`/games${query}`);
      return JSON.parse(res.data);
    } catch (e) {
      return new HttpException('Unexpected error', 500);
    }
  }

  async findOneById(id: string) {
    try {
      const res = await this.client.get(`/game/?id=${id}`);

      return JSON.parse(res.data);
    } catch (e) {}
  }
}

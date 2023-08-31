import { ApiService } from '../api/api.service';
import { FilterParamsType } from '../types/filter-params.type';
export declare class GamesService {
    private apiService;
    constructor(apiService: ApiService);
    fetchAllGames(params: FilterParamsType): Promise<any>;
}

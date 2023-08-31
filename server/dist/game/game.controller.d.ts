import { ApiService } from '../api/api.service';
export declare class GameController {
    private apiService;
    constructor(apiService: ApiService);
    findOneById(id: string): Promise<any>;
}

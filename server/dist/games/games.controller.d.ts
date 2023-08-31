import { GamesService } from './games.service';
export declare class GamesController {
    private gamesService;
    constructor(gamesService: GamesService);
    fetchAllGames(params: any): Promise<any>;
}

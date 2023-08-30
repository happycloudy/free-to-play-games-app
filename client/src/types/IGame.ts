import {IGameShort} from "./IGameShort.ts";
import {IScreenshot} from "./IScreenshot.ts";
import {ISystemRequirements} from "./ISystemRequirements.ts";

export type IGame = IGameShort & {
    screenshots: IScreenshot[]
    developer: string
    minimum_system_requirements: ISystemRequirements
}
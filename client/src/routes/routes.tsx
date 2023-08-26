import Game from "../pages/Game.tsx";
import {createBrowserRouter, RouteObject} from "react-router-dom";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <Game/>
    }
]

export const router = createBrowserRouter(routes)
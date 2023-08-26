import Game from "../pages/Game.tsx";
import {createBrowserRouter, RouteObject} from "react-router-dom";
import Home from "../pages/Home.tsx";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/game',
        element: <Game/>
    }
]

export const router = createBrowserRouter(routes)
import Game from "../pages/Game.tsx";
import {createBrowserRouter, Navigate, RouteObject} from "react-router-dom";
import Home from "../pages/Home.tsx";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/game/:id',
        element: <Game/>
    },
    {
        path: '*',
        element: <Navigate to={'/'}/>
    }
]

export const router = createBrowserRouter(routes)
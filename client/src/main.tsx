import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/normalize.css'
import './styles/global.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/routes.tsx";
import {Provider} from "react-redux";
import store from "./store/store.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
)

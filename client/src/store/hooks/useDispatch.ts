import {useDispatch} from "react-redux";
import store from "../store.ts";

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
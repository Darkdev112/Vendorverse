import {useSelector, useDispatch , TypedUseSelectorHook} from 'react-redux'
import type { RootState, AppDispatch } from "./store";

export const newDispatch : () => AppDispatch = useDispatch;
export const newSelector : TypedUseSelectorHook<RootState> = useSelector;
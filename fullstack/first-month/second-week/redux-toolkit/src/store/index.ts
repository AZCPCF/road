import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
export const slice = createSlice({
  name: "test",
  reducers: {
    test: (state, action) => {
      return { ...state, name: action.payload };
    },
    changeCount: (state, action) => {
      return { ...state, count: state.count + action.payload };
    },
  },
  initialState: { name: "Vite + React", count: 0 },
});
export const store = configureStore({ reducer: { slice: slice.reducer } });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
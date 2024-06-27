import { configureStore } from '@reduxjs/toolkit';
import userDataReducer from './userDataSlice';
import boardDataReducer from './boardDataSlice';

const store = configureStore({
  reducer: {
    userData: userDataReducer,
    boardData: boardDataReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;

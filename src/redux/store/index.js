import {configureStore} from '@reduxjs/toolkit';
import modal from '../slice/modalsSlice';

export const store = configureStore({
  reducer: {
    modal,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from '@reduxjs/toolkit';
import CountrySlice from './slices/CountrySlice';
import formSlice from './slices/formSlice';

export const store = configureStore({
  reducer: {
    forms: formSlice,
    countries: CountrySlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

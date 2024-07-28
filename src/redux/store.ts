import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { apiSlice } from './slices/rtkQuery/apiSlice';
import selectedItemsSlice from './slices/selectSlice';

const rootReducer = combineReducers({
  selectedItems: selectedItemsSlice,
  [apiSlice.reducerPath]: apiSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

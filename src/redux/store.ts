import { combineReducers, configureStore } from '@reduxjs/toolkit';
import selectedItemsSlice from './slices/selectSlice';

const rootReducer = combineReducers({
  selectedItems: selectedItemsSlice
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

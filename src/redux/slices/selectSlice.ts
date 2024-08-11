import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IResponse } from '../../interfaces/MainPageInterface';
import { IInitialState } from '../../interfaces/InitialStateInterface';



const initialState: IInitialState = {
  selectedElements: []
};

const selectedItemsSlice = createSlice({
  name: 'selectedItems',
  initialState,
  reducers: {
    selectItem(state, action: PayloadAction<IResponse>) {
      state.selectedElements.push(action.payload);
    },
    unselectedItem(state, action: PayloadAction<string>) {
      return {
        ...state,
        selectedElements: state.selectedElements.filter((item) => item.url !== action.payload)
      };
    },
    unselectAll(state) {
      return {
        ...state,
        selectedElements: []
      };
    }
  }
});

export const { selectItem, unselectedItem, unselectAll } = selectedItemsSlice.actions;

export default selectedItemsSlice.reducer;

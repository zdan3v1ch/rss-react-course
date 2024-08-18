import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFormData } from '../../../interfaces/formDataInterface';

const initialState: {
  forms: IFormData[]
} = {
  forms: []
};
const formDataSlice = createSlice({
  name: 'formsData',
  initialState,
  reducers: {
    addFormData(state, action: PayloadAction<IFormData>) {
      state.forms.push(action.payload);
    }
  }
});

export const { addFormData } = formDataSlice.actions;
export default formDataSlice.reducer;

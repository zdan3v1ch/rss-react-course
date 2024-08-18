import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: {
  forms: string[]
} = {
  forms: []
};
const formDataSlice = createSlice({
  name: 'formsData',
  initialState,
  reducers: {
    addFormData(state, action: PayloadAction<string>) {
      state.forms.push(action.payload);
    }
  }
});

export const { addFormData } = formDataSlice.actions;
export default formDataSlice.reducer;

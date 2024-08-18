import { createSlice } from '@reduxjs/toolkit';
import { countries } from '../../../data/dataCountries';

const initialState: {
  countries: string[]
} = {countries};
const countrySlice = createSlice({
  name: 'Country',
  initialState,
  reducers: {}
});

export default countrySlice.reducer;

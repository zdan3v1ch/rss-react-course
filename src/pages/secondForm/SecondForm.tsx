import React from 'react';
import { RootState } from '../../features/router/redux/store';
import { useSelector } from 'react-redux';

const SecondForm = () => {
  const countries = useSelector((state: RootState) => state.countries.countries);
  console.log(countries)
  return (
    <div>
      Second form
      <form>
      <div>
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          list="country-list"
        />
        <datalist id="country-list">
          {countries.map((country) => (
            <option key={country}>{country}</option>
          ))}
        </datalist>
      </div>

      </form>
    </div>
  );
};

export default SecondForm;

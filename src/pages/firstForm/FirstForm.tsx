import { useState } from 'react';
import { useSelector } from 'react-redux';
import style from '../secondForm/style.module.css';
import { RootState } from '../../features/redux/store';
import { useUncontrolledForm } from '../../hooks/useUncontrolledForm';

const FirstForm = () => {
  const countries = useSelector((state: RootState) => state.countries.countries);

  const [disabled, setDisabled] = useState(false);
  const {
    nameRef,
    ageRef,
    errors,
    handleSubmit,
    emailRef,
    passwordRef,
    passwordSecondRef,
    genderRef,
    tAndCRef,
    countryRef,
    pictureRef
  } = useUncontrolledForm(setDisabled);

  const handleChange = () => {
    setDisabled(false);
  };

  return (
    <div>
      <h1>Uncontrolled form</h1>
      <form className={style.form} noValidate onSubmit={handleSubmit}>
        <div className={style.input}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" ref={nameRef} onChange={handleChange} />
          <p className={style.error}>{errors.name}</p>
        </div>
        <div className={style.input}>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" ref={ageRef} onChange={handleChange} />
          <p className={style.error}>{errors.age}</p>
        </div>
        <div className={style.input}>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" ref={emailRef} onChange={handleChange} />
          <p className={style.error}>{errors.email}</p>
        </div>
        <div className={style.input}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" ref={passwordRef} onChange={handleChange} />
          <p className={style.error}>{errors.password}</p>
        </div>
        <div className={style.input}>
          <label htmlFor="passwordSecond">Confirm Password:</label>
          <input type="password" id="passwordSecond" ref={passwordSecondRef} onChange={handleChange} />
          <p className={style.error}>{errors.passwordSecond}</p>
        </div>
        <div className={style.input}>
          <label htmlFor="gender">Gender:</label>
          <select id="gender" ref={genderRef}>
            <option>Man</option>
            <option>Woman</option>
          </select>
          <p className={style.error}>{errors.gender}</p>
        </div>
        <div className={style.input}>
          <label htmlFor="tAndC">Accept Terms and Conditions agreement</label>
          <input type="checkbox" id="tAndC" ref={tAndCRef} onChange={handleChange} />
          <p className={style.error}>{errors.tAndC}</p>
        </div>
        <div className={style.input}>
          <label htmlFor="picture">Picture:</label>
          <input type="file" accept=".jpeg, .jpg, .png" id="picture" ref={pictureRef} onChange={handleChange} />
          <p className={style.error}>{errors.picture}</p>
        </div>
        <div className={style.input}>
          <label htmlFor="country">Country:</label>
          <input type="text" id="country" list="country-list" ref={countryRef} onChange={handleChange} />
          <datalist id="country-list">
            {countries.map((country) => (
              <option key={country}>{country}</option>
            ))}
          </datalist>
          <p className={style.error}>{errors.country}</p>
        </div>
        <div>
          <button type="submit" disabled={disabled}>
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FirstForm;

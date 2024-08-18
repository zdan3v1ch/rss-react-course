import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../secondForm/style.module.css';
import { schemaUncontrolled } from '../../features/validation/schemes';
import { toBase64 } from '../../utils/convertToBase64';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../features/redux/store';
import { addFormData } from '../../features/redux/slices/formSlice';
import * as yup from 'yup';
import { IFormData } from '../../interfaces/formDataInterface';

const SecondForm = () => {
  const countries = useSelector((state: RootState) => state.countries.countries);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const tAndCRef = useRef<HTMLInputElement>(null);
  const pictureRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData: IFormData = {
      name: nameRef.current?.value,
      age: ageRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      passwordSecond: confirmPasswordRef.current?.value,
      gender: genderRef.current?.value,
      tAndC: tAndCRef.current?.checked,
      country: countryRef.current?.value,
      picture: pictureRef.current?.files?.[0]
    };

    try {
      await schemaUncontrolled.validate(formData, { abortEarly: false });
      setErrors({});

      const imageBase64 = await toBase64(pictureRef.current?.files?.[0] ?? null);

      dispatch(
        addFormData({
          ...formData,
          picture: imageBase64,
        })
      );

      navigate('/');
    } catch (error) {
      const validationErrors: Record<string, string> = {};

      if (error instanceof yup.ValidationError) {
        error.inner.forEach((err) => {
          if (err.path !== undefined) {
            validationErrors[err.path] = err.message;
          }
        });
      }

      setErrors(validationErrors);
    }
  }

  return (
    <div>
      <h1>Uncontrolled form</h1>
      <form className={style.form} noValidate onSubmit={handleSubmit}>
        <div className={style.input}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" ref={nameRef} />
          <p className={style.error}>{errors.name}</p>
        </div>
        <div className={style.input}>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" ref={ageRef} />
          <p className={style.error}>{errors.age}</p>
        </div>
        <div className={style.input}>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" ref={emailRef} />
          <p className={style.error}>{errors.email}</p>
        </div>
        <div className={style.input}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" ref={passwordRef} />
          <p className={style.error}>{errors.password}</p>
        </div>
        <div className={style.input}>
          <label htmlFor="passwordSecond">Confirm Password:</label>
          <input type="password" id="passwordSecond" ref={confirmPasswordRef} />
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
          <input type="checkbox" id="tAndC" ref={tAndCRef} />
          <p className={style.error}>{errors.tAndC}</p>
        </div>
        <div className={style.input}>
          <label htmlFor="picture">Picture:</label>
          <input type="file" accept=".jpeg, .jpg, .png" id="picture" ref={pictureRef} />
          <p className={style.error}>{errors.picture}</p>
        </div>
        <div className={style.input}>
          <label htmlFor="country">Country:</label>
          <input type="text" id="country" list="country-list" ref={countryRef} />
          <datalist id="country-list">
            {countries.map((country) => (
              <option key={country}>{country}</option>
            ))}
          </datalist>
          <p className={style.error}>{errors.country}</p>
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};

export default SecondForm;

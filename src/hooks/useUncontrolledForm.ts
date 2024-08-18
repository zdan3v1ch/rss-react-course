import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IFormData } from '../interfaces/formDataInterface';
import { schemaUncontrolled } from '../features/validation/schemes';
import { toBase64 } from '../utils/convertToBase64';
import { addFormData } from '../features/redux/slices/formSlice';
import * as yup from 'yup';

export const useUncontrolledForm = (setDisabled: React.Dispatch<React.SetStateAction<boolean>>) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordSecondRef = useRef<HTMLInputElement>(null);
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
      passwordSecond: passwordSecondRef.current?.value,
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
          picture: imageBase64
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
      if (Object.keys(validationErrors).length) {
        setDisabled(true);
      }
    }
  };
  return {
    nameRef,
    ageRef,
    emailRef,
    passwordRef,
    passwordSecondRef,
    genderRef,
    tAndCRef,
    pictureRef,
    countryRef,
    errors,
    setErrors,
    handleSubmit
  };
};

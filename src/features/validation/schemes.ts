import * as yup from 'yup';
import { countries } from '../../data/dataCountries';

const MAX_FILE_SIZE = 314572.8;
const FORMATS = ['image/jpeg', 'image/png', 'image/jpg'];
export const schemaControlled = yup.object({
  country: yup
    .string()
    .transform((currentValue, originalValue) => (originalValue.trim() === '' ? null : currentValue))
    .required('Country is required')
    .oneOf(countries, 'Invalid country'),
  name: yup
    .string()
    .required('Name is required')
    .matches(/^[A-Z]/, 'Name must start with an uppercase letter'),
  age: yup
    .number()
    .transform((currentValue, originalValue) => (originalValue.trim() === '' ? null : currentValue))
    .required('Age is required')
    .positive('Age must be positive'),
  email: yup
    .string()
    .required('Email is required')
    .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i, 'Email must be a valid email'),
  gender: yup.string().required('Gender is required'),
  password: yup
    .string()
    .required('Password is required')
    .matches(/[0-9]/, 'Password must contain at least one digit')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[!@#%^&*]/, 'Password must contain at least one special character')
    .min(8, 'Password must be at least 8 characters long'),
  passwordSecond: yup
    .string()
    .oneOf([yup.ref('password'), undefined], 'Passwords must match')
    .required('Confirm Password is required'),
  tAndC: yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
  picture: yup
    .mixed()
    .required('Picture is required')
    .test('fileFormat', 'The file must be in PNG or JPEG format.', (value) => {
      if (value instanceof FileList && value.length > 0) {
        return FORMATS.includes(value[0].type);
      }
      return false;
    })
    .test('fileSize', 'File is more than 300kB', (value) => {
      if (value instanceof FileList && value.length > 0) {
        return value[0].size <= MAX_FILE_SIZE;
      }
      return false;
    })
});


export const schemaUncontrolled = yup.object({
  ...schemaControlled.fields,
  picture: yup
  .mixed()
  .required('Picture is required')
  .test('fileFormat', 'The file must be in PNG or JPEG format.', (value) => {
    if (value instanceof File) {
      return FORMATS.includes(value.type);
    }
    return false;
  })
  .test('fileSize', 'File is more than 300kB', (value) => {
    if (value instanceof File) {
      return value.size <= MAX_FILE_SIZE;
    }
    return false;
  })
})

import { useDispatch, useSelector } from 'react-redux';
import style from './style.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormData } from '../../interfaces/formDataInterface';
import { schemaControlled } from '../../features/validation/schemes';
import { toBase64 } from '../../utils/convertToBase64';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../features/redux/store';
import { addFormData } from '../../features/redux/slices/formSlice';

const SecondForm = () => {
  const countries = useSelector((state: RootState) => state.countries.countries);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    resolver: yupResolver(schemaControlled),
    mode: 'all'
  });
  const onSubmit = async (data: FormData) => {
    try {
      const file = (data.picture as File[])[0];
      const imageBase64 = await toBase64(file);

      dispatch(
        addFormData({
          ...data,
          age: data.age.toString(),
          picture: imageBase64
        })
      );
      navigate('/');
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
  return (
    <div>
      <h1>Controlled form</h1>
      <form className={style.form} noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className={style.input}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" {...register('name')} />
          <p className={style.error}>{errors.name?.message}</p>
        </div>
        <div className={style.input}>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" {...register('age')} />
          <p className={style.error}>{errors.age?.message}</p>
        </div>
        <div className={style.input}>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" {...register('email')} />
          <p className={style.error}>{errors.email?.message}</p>
        </div>
        <div className={style.input}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" {...register('password')} />
          <p className={style.error}>{errors.password?.message}</p>
        </div>
        <div className={style.input}>
          <label htmlFor="passwordSecond">Confirm Password:</label>
          <input type="password" id="passwordSecond" {...register('passwordSecond')} />
          <p className={style.error}>{errors.passwordSecond?.message}</p>
        </div>
        <div className={style.input}>
          <label htmlFor="gender">Gender:</label>
          <select id="gender" {...register('gender')}>
            <option>Man</option>
            <option>Woman</option>
          </select>
          <p className={style.error}>{errors.gender?.message}</p>
        </div>
        <div className={style.input}>
          <label htmlFor="tAndC">Accept Terms and Conditions agreement</label>
          <input type="checkbox" id="tAndC" {...register('tAndC')} />
          <p className={style.error}>{errors.tAndC?.message}</p>
        </div>
        <div className={style.input}>
          <label htmlFor="picture">Picture:</label>
          <input type="file" accept=".jpeg, .jpg, .png" id="picture" {...register('picture')} />
          <p className={style.error}>{errors.picture?.message}</p>
        </div>
        <div className={style.input}>
          <label htmlFor="country">Country:</label>
          <input type="text" id="country" list="country-list" {...register('country')} />
          <datalist id="country-list">
            {countries.map((country) => (
              <option key={country}>{country}</option>
            ))}
          </datalist>
          <p className={style.error}>{errors.country?.message}</p>
        </div>
        <div>
          <button type="submit" disabled={!isValid}>
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SecondForm;

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../features/redux/store';
import styles from './styles.module.css';

const MainPage = () => {
  const formsAll = useSelector((state: RootState) => state.forms.forms);
  return (
    <>
      <h1>Main Page</h1>
      <div className={styles.MainBlock}>
        <main>
          <ul>
            <li key={1}>
              <Link to="/uncF">Uncontrolled Form</Link>
            </li>
            <li key={2}>
              <Link to="/conF">Controlled Form</Link>
            </li>
          </ul>
        </main>
        {formsAll.length > 0 ? (
          <article>
            {formsAll.map((form, index) => (
              <div key={index} className={styles.formsBlock}>
                <div className={styles.imageBlock}>
                  <img src={`${form.picture}`} />
                </div>
                <div className={styles.dataBlock}>
                  <p>Name: {form.name}</p>
                  <p>Age: {form.age}</p>
                  <p>Gender: {form.gender}</p>
                  <p>Email: {form.email}</p>
                  <p> T and C: {form.tAndC ? '✓' : ''}</p>
                </div>
              </div>
            ))}
          </article>
        ) : (
          <p>No forms</p>
        )}
      </div>
    </>
  );
};

export default MainPage;

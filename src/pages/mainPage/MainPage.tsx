import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../features/redux/store';

const MainPage = () => {
  const formsAll = useSelector((state: RootState) => state.forms.forms);
  return (
    <div>
      <h1>Main Page</h1>
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
      <article>
        {formsAll.map((form, index) => (
          <div key={index}>
            <p>Name: {form.name}</p>
            <p>Age: {form.age}</p>
            <p>Gender: {form.gender}</p>
            <p>Email: {form.email}</p>
          </div>
        ))}
      </article>
    </div>
  );
};

export default MainPage;

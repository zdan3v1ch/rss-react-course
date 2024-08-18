import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
      <h1>Main Page</h1>
      <ul>
        
          <li key={1}>
            <Link to="/uncF">Uncontrolled Form</Link>
          </li>
          <li key={2}>
            <Link to="/conF">Controlled Form</Link>
          </li>
      </ul>
    </div>
  );
};

export default MainPage;

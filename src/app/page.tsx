import '../index.css';
import React from 'react';
import MainPageFunc from '../pagesOnApp/mainPage/MainPage';

async function getData() {
  const response = await fetch('https://swapi.dev/api/people');
  return response.json();
}

export default async function Page() {
  const posts = await getData();
  return <MainPageFunc people={posts} page={'1'} detail={null} />;
}

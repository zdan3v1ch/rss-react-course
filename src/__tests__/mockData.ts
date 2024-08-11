import { IData, IResponse } from "../interfaces/MainPageInterface";

export const mockCards = [
  {
    name: "R2-D2",
    height: "96",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a",
    homeworld: "https://swapi.dev/api/planets/8/",
    films: [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/4/",
      "https://swapi.dev/api/films/5/",
      "https://swapi.dev/api/films/6/"
    ],
    species: [
      "https://swapi.dev/api/species/2/"
    ],
    vehicles: [],
    starships: [],
    created: "2014-12-10T15:11:50.376000Z",
    edited: "2014-12-20T21:17:50.311000Z",
    url: "https://swapi.dev/api/people/3/"
  },
];

export const mockResponse: IData = {
  count: 1,
  results: [
  {
    name: "R2-D2",
    height: "96",
    mass: "32",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a",
    url: "https://swapi.dev/api/people/3/"
  },
],}

export const mockData: IResponse = {
  name: 'Luke Skywalker',
  eye_color: 'blue',
  gender: 'male',
  height: '172',
  skin_color: 'fair',
  mass: '',
  birth_year: '',
  url: ''
};

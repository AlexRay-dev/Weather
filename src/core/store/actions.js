export const ADD_CITY = 'ADD_CITY';
export const REMOVE_CITY = 'REMOVE_CITY';
export const FORECAST = 'FORECAST';
export const MAIN = 'MAIN';

export const addCity = (name) => {
  return {type: ADD_CITY, name};
};

export const removeCity = (name) => {
  return {type: REMOVE_CITY, name};
};

export const getForecast = (data) => {
  return {type: FORECAST, forecast: data};
};

export const getMain = (data) => {
  return {type: MAIN, main: data};
};
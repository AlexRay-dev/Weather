export const ADD_CITY = 'ADD_CITY';
export const REMOVE_CITY = 'REMOVE_CITY';
export const FORECAST = 'FORECAST';
export const MAIN = 'MAIN';

export function addCity(name) {
  return {type: ADD_CITY, name};
}

export function removeCity(name) {
  return {type: REMOVE_CITY, name};
}

export function getForecast(data) {
  return {type: FORECAST, forecast: data};
}

export function getMain(data) {
  return {type: MAIN, main: data};
}
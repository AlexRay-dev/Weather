import {format} from "date-fns";

const STORAGE = {
  FAVORITE_LIST: 'favoriteList',
  CURRENT_CITY: 'currentCity',
};

const getCelsius = (temp) => {
  return Math.round(temp - 273.15);
};

const getTime = (time) => {
  const unixTime = (time - 10800) * 1000;
  const date = new Date(unixTime);
  const hours = (date.getHours() < 10) ? `0${date.getHours()}` : date.getHours();
  const minutes = (date.getMinutes() < 10) ? `0${date.getMinutes()}` : date.getMinutes();

  return `${hours}:${minutes}`;
};

const getDate = (time) => {
  const date = new Date(time);

  return format(date, "LLLL d");
};

const getStorageData = (storage) => {
  const jsonData = localStorage.getItem(storage);

  try {
    return JSON.parse(jsonData);
  } catch (e) {
    console.error(e);
  }
};

const setStorageData = (storage, data) => {
  const jsonData = JSON.stringify(data);
  localStorage.setItem(storage, jsonData);
};

export {getCelsius, getDate, getTime, getStorageData, setStorageData, STORAGE};
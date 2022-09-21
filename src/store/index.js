import {getStorageData, STORAGE} from "../shared/utils";
import {createStore} from "redux";
import rootReducer from "./reducers";

const defaultLocations = ['Los Angeles', 'New York', 'Kyiv', 'Tokyo', 'Berlin'];
const defaultCity = 'Moscow';

export const storageCity = getStorageData(STORAGE.CURRENT_CITY) ?? defaultCity;
const storageFavoriteList = getStorageData(STORAGE.FAVORITE_LIST) ?? defaultLocations;

const storage = {
  list: storageFavoriteList
}
export const store = createStore(rootReducer, storage);

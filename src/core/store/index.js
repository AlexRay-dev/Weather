import {getStorageData, STORAGE} from "../utils/utils";
import {createStore} from "redux";
import rootReducer from "./reducers";
import {DEFAULT_CITY, DEFAULT_LOCATIONS} from "../consts/config";

export const storageCity = getStorageData(STORAGE.CURRENT_CITY) ?? DEFAULT_CITY;
const storageFavoriteList = getStorageData(STORAGE.FAVORITE_LIST) ?? DEFAULT_LOCATIONS;

const storage = {
  list: storageFavoriteList,
};
export const store = createStore(rootReducer, storage);

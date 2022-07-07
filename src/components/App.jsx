import {useEffect} from 'react'
import Form from "./form";
import Locations from "./locations";
import {API, weatherData} from "../api";
import Tabs from "./tabs";
import {getStorageData, setStorageData, STORAGE} from "../utils";
import {createStore} from "redux";
import rootReducer from "../store/reducers";
import {Provider, useDispatch} from "react-redux";
import {getForecast, getMain} from "../store/actions";

const defaultLocations = ['Los Angeles', 'New York', 'Kyiv', 'Tokyo', 'Berlin'];
const defaultCity = 'Moscow';

const storageCity = getStorageData(STORAGE.CURRENT_CITY) ?? defaultCity;
const storageFavoriteList = getStorageData(STORAGE.FAVORITE_LIST) ?? defaultLocations;

const storage = {
  list: storageFavoriteList
}

const store = createStore(rootReducer, storage);

function App() {
  return (
    <Provider store={store}>
      <Weather/>
    </Provider>
  )
}

function Weather() {
  const dispatch = useDispatch();

  useEffect(() => {
    showWeather(storageCity);
  }, []);

  async function showWeather(city) {
    try {
      const responseMain = await weatherData(API.URL_MAIN, city);
      const responseForecast = await weatherData(API.URL_FORECAST, city);

      if (!responseMain.name) {
        alert(`Error: ${responseMain.message}`);
        return;
      }

      setStorageData(STORAGE.CURRENT_CITY, city);

      dispatch(getMain(responseMain));
      dispatch(getForecast(responseForecast));
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className={'weather'}>
      <div className={'weather__container'}>
        <Form showWeather={showWeather}/>

        <div className="weather__main flex">
          <Tabs/>
          <Locations showWeather={showWeather}/>
        </div>
      </div>
    </div>
  )
}

export default App

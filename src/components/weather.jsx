import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {API, weatherData} from "../core/consts/api";
import {setStorageData, STORAGE} from "../core/utils/utils";
import {getForecast, getMain} from "../core/store/actions";
import Form from "./weather-form";
import Tabs from "./tabs/tabs";
import Locations from "./locations/locations";
import {storageCity} from "../core/store";

const Weather = () => {
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
      }

      setStorageData(STORAGE.CURRENT_CITY, city);
      dispatch(getMain(responseMain));
      dispatch(getForecast(responseForecast));
    } catch (e) {
      console.log(e);
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
};

export default Weather;
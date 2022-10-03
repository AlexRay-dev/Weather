import {useSelector} from "react-redux";
import {setStorageData, STORAGE} from "../../core/utils/utils";
import LocationsItem from "./locations-item";

const LocationsList = ({showWeather}) => {
  const state = useSelector((state) => state);
  const list = state.list.map((item, index) =>
    <LocationsItem key={index} name={item} showWeather={showWeather}/>
  );

  setStorageData(STORAGE.FAVORITE_LIST, state.list);

  return (
    <ul className="weather__locations-list">{list}</ul>
  )
};

export default LocationsList;
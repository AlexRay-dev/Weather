import {useDispatch, useSelector} from "react-redux";
import {removeCity} from "../store/actions";
import {setStorageData, STORAGE} from "../utils";

function Locations({showWeather}) {
  return (
    <div className="weather__locations">
      <h2 className="header header_locations">
        Added Locations:
      </h2>
      <LocationsList showWeather={showWeather}/>
    </div>
  )
}

function LocationsList({showWeather}) {
  const state = useSelector((state) => state);
  const list = state.list.map((item, index) =>
    <LocationsItem key={index} name={item} showWeather={showWeather}/>
  );

  setStorageData(STORAGE.FAVORITE_LIST, state.list);

  return (
    <ul className="weather__locations-list">
      {list}
    </ul>
  )
}

function LocationsItem({name, showWeather}) {
  const dispatch = useDispatch();

  const handleRemove = (city) => {
    dispatch(removeCity(city))
  }

  return (
    <li className="weather__locations-list-item flex">
      <button className="weather__locations-favorite-btn" onClick={() => showWeather(name)}>
        {name}
      </button>
      <button className="weather__location-del" onClick={() => handleRemove(name)}></button>
    </li>
  )
}

export default Locations
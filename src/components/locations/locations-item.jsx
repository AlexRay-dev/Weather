import {useDispatch} from "react-redux";
import {removeCity} from "../../core/store/actions";

const LocationsItem = ({name, showWeather}) => {
  const dispatch = useDispatch();

  const handleRemove = (city) => {
    dispatch(removeCity(city));
  };

  return (
    <li className="weather__locations-list-item flex">
      <button className="weather__locations-favorite-btn" onClick={() => showWeather(name)}>
        {name}
      </button>
      <button className="weather__location-del" onClick={() => handleRemove(name)}></button>
    </li>
  )
};

export default LocationsItem;
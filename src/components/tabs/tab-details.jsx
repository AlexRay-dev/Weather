import {useSelector} from "react-redux";
import {getCelsius, getTime} from "../../core/utils/utils";

const TabDetails = () => {
  const {name, temp, feelsLike, weather, sunrise, sunset} = useSelector(state => state.main);

  return (
    <div className="weather__tab tab-details">
      <div className="weather__tab-container weather__tab-container_details">
        <h2 className="header header_details">{name}</h2>
        <ul className="tab-details__list">
          <li className="tab-details__list-item">
            Temperature: <span className="details__temp">{getCelsius(temp)}&#176;</span>
          </li>
          <li className="tab-details__list-item">
            Feels like: <span className="details__feels">{getCelsius(feelsLike)}&#176;</span>
          </li>
          <li className="tab-details__list-item">
            Weather: <span className="details__weather">{weather}</span>
          </li>
          <li className="tab-details__list-item">
            Sunrise: <span className="details__sunrise">{getTime(sunrise)}</span>
          </li>
          <li className="tab-details__list-item">
            Sunset: <span className="details__sunset">{getTime(sunset)}</span>
          </li>
        </ul>
      </div>
    </div>
  )
};

export default TabDetails;
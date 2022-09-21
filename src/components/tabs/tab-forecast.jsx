import {getCelsius, getDate, getTime} from "../../shared/utils";
import {useSelector} from "react-redux";

function TabForecast() {
  const data = useSelector(state => state.forecast);

  return (
    <div className="weather__tab tab-forecast">
      <div className="weather__tab-container weather__tab-container_forecast">
        <h2 className="header header_forecast">{data.city?.name}</h2>
        <ListForecast data={data}/>
      </div>
    </div>
  )
}

function ListForecast({data}) {
  const list = data.list?.map((item, index) =>
    <ListItemForecast key={index}
                      date={getDate(item.dt_txt)}
                      time={getTime(item.dt)}
                      temp={getCelsius(item.main?.temp)}
                      feelTemp={getCelsius(item.main?.feels_like)}
                      weather={(item.weather ?? {})[0]?.main}/>
  );

  return (
    <ul className="tab-forecast__list">
      {list}
    </ul>
  )
}

function ListItemForecast({date, time, temp, feelTemp, weather}) {
  return (
    <li className="tab-forecast__list-item flex">
      <div className="tab-forecast__item-top flex">
        <span className="tab-forecast__date">{date}</span>
        <span className="tab-forecast__time">{time}</span>
      </div>
      <div className="tab-forecast__item-bottom flex">
        <div className="tab-forecast__briefly-condition">
          <p className="tab-forecast__temp">
            Temperature: <span>{temp}&#176;</span>
          </p>
          <p className="tab-forecast__feels">
            Feels like: <span>{feelTemp}&#176;</span>
          </p>
        </div>
        <div className="tab-forecast__weather">{weather}</div>
      </div>
    </li>
  )
}

export default TabForecast
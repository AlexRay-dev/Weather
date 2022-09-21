import LocationsList from "./locations-list";

function Locations({showWeather}) {
  return (
    <div className="weather__locations">
      <h2 className="header header_locations">Added Locations:</h2>

      <LocationsList showWeather={showWeather}/>
    </div>
  )
}

export default Locations;
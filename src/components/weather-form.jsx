import {useState} from "react";

const WeatherForm = ({showWeather}) => {
  const [value, setValue] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (!value.trim()) return;

    showWeather(value);
    setValue('');
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input className="form__input" type="text" placeholder="Search city" value={value}
             onChange={event => setValue(event.target.value)}/>

      <input className="form__search-btn" type="submit" value=''/>
    </form>
  )
}

export default WeatherForm;
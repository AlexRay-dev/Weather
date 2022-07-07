import TabNow from "./tab-now";
import TabDetails from "./tab-details";
import TabForecast from "./tab-forecast";

function Tabs() {
  return (
    <div className="weather__tabs flex">
      <Wrapper/>
      <TabNow/>
      <TabDetails/>
      <TabForecast/>
    </div>
  )
}

function Wrapper() {
  return (
    <>
      <input className="wrap-input" type="radio" name="wrap-input" id="wrap-btn_now" value=""
             defaultChecked={true}/>
      <label className="wrap-btn" htmlFor="wrap-btn_now">Now</label>
      <input className="wrap-input" type="radio" name="wrap-input" id="wrap-btn_details" value=""/>
      <label className="wrap-btn" htmlFor="wrap-btn_details">Details</label>
      <input className="wrap-input" type="radio" name="wrap-input" id="wrap-btn_forecast" value=""/>
      <label className="wrap-btn" htmlFor="wrap-btn_forecast">Forecast</label>
    </>
  )
}

export default Tabs;
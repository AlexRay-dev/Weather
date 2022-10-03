import TabNow from "./tab-now";
import TabDetails from "./tab-details";
import TabForecast from "./tab-forecast";
import TabHeader from "./tab-header";

const Tabs = () => {
  return (
    <div className="weather__tabs flex">
      <TabHeader/>
      <TabNow/>
      <TabDetails/>
      <TabForecast/>
    </div>
  )
};

export default Tabs;
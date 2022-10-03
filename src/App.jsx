import {Provider} from "react-redux";
import {store} from "./core/store";
import Weather from "./components/weather";

const App = () => {
  return (
    <Provider store={store}>
      <Weather/>
    </Provider>
  )
};

export default App;

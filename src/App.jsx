import {Provider} from "react-redux";
import {store} from "./store";
import Weather from "./components/weather";

function App() {
  return (
    <Provider store={store}>
      <Weather/>
    </Provider>
  )
}

export default App

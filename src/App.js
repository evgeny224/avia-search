import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import SearchContainer from "./Components/Search/SearchContainer";
import { Route } from "react-router-dom";
import SearchLowPrice from "./Components/SearchLowPrice/SearchLowPrice";
import SearchHeighPrice from "./Components/SearchHeightPrice/SearchHeighPrice";
import SearchTrevelTime from "./Components/SearchTrevelTime/SearchTrevelTime";

function App() {
  return (
          <div className="App">
                <Sidebar />
                <Route exact path = "/" render = {() => <SearchContainer />} />
                <Route path = "/lowprice" render = {() => <SearchLowPrice />}  />
                <Route path = "/heighprice" render = {() => <SearchHeighPrice />}  />
                <Route path = "/traveltime" render = {() => <SearchTrevelTime />}  />
          </div>
  );
}

export default App;

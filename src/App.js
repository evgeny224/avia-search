import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import SearchContainer from "./Components/Search/SearchContainer";
import { Route } from "react-router-dom";
import SearchLowPrice from "./Components/SearchLowPrice/SearchLowPrice";
import SearchHeighPrice from "./Components/SearchHeightPrice/SearchHeighPrice";
import SearchTrevelTime from "./Components/SearchTrevelTime/SearchTrevelTime";
import SearchTransfer from "./Components/SearchTransfer/SearchTransfer";
import SearchNoTransfer from "./Components/SearchNoTransfer/SearchNoTransfer";
import SearchPolishCompany from "./Components/SearchPolishCompany/SearchPolishCompany";
import SearchArflotCompany from "./Components/SearchArflotCompany/SearchArflotCompany";




  function App() {
    return (
            <div className="App">
                  <Sidebar />
                  <Route exact path = "/" render = {() => <SearchContainer />} />
                  <Route path = "/lowprice" render = {() => <SearchLowPrice />}  />
                  <Route path = "/heighprice" render = {() => <SearchHeighPrice />}  />
                  <Route path = "/traveltime" render = {() => <SearchTrevelTime />}  />
                  <Route path = "/transfer" render = {() => <SearchTransfer />}  />
                  <Route path = "/notransfer" render = {() => <SearchNoTransfer />}  />
                  <Route path = "/polish" render = {() => <SearchPolishCompany />}  />
                  <Route path = "/airflot" render = {() => <SearchArflotCompany />}  />
            </div>
    );
  }

export default App;

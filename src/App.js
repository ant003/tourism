import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import Home from "./Home/Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Place from "./Place/Place";
import Map from "./Map/Map";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/place/:id">
                        <Place/>
                    </Route>
                    <Route exact path="/map">
                        <Map/>
                    </Route>
                </Switch>
                <Footer/>
            </div>
        </Router>

    );
  }
  
  export default App;
import Footer from "./Footer";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Place from "./Place";
import Map from "./Map";

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
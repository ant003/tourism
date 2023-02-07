import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import Places from "./Places/Places";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Place from "./Place/Place";
import Map from "./Map/Map";
import Create from "./Create/Create";
import Home from "./Home/Home";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/lugares">
                        <Places/>
                    </Route>
                    <Route exact path="/place/:id">
                        <Place/>
                    </Route>
                    <Route exact path="/map">
                        <Map/>
                    </Route>
                    <Route exact path="/crear">
                        <Create/>
                    </Route>
                </Switch>
                <Footer/>
            </div>
        </Router>

    );
  }
  
  export default App;
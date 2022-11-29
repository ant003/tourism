import Footer from "./Footer";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Place from "./Place";

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
                </Switch>
                <Footer/>
            </div>
        </Router>

    );
  }
  
  export default App;
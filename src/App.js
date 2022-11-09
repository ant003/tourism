import Footer from "./Footer";
import Navbar from "./Navbar";
import SquareList from "./SquareList";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <div className="content">
                <SquareList/>
            </div>
            <Footer/>
        </div>

    );
  }
  
  export default App;
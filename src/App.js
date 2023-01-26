import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Home2 from './pages/Home2';
function App() {
  return (
    <div className="App">
     <Router>
          <Routes>

            <Route exact path="/" element={< Home />}></Route>
            <Route exact path="/Home2" element={< Home2 />}></Route>





          </Routes>
        </Router>
    </div>
  );
}

export default App;

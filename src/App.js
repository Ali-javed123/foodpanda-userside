import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Home2 from './pages/Home2';
import Home3 from './pages/Home3';
import Service from './pages/Services';
function App() {
  return (
    <div className="App">
     <Router>
          <Routes>

            <Route exact path="/" element={< Home />}></Route>
            <Route exact path="/Service" element={< Service />}></Route>

            <Route exact path="/Home2" element={< Home2 />}></Route>
            <Route exact path="/Home3" element={< Home3 />}></Route>






          </Routes>
        </Router>
    </div>
  );
}

export default App;

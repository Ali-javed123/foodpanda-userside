import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Home2 from './pages/Home2';
import Home3 from './pages/Home3';
import Service from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import About from './pages/About';
import Feature from './pages/Feature';
import Gellery from './pages/Gellery';
import SearchLoaction from './pages/SearchLocation';
import Reservation from './pages/Reservation';
import OurApp from './pages/OurApp';
import Testimonials from '../src/pages/Testimoniels';
import Faq from './pages/Faq';  
import Login from './pages/Login';
import Register from './pages/Resgister';
import ForgetPassword from './pages/ForgetPassword';
import PrivicyPolicy from './pages/PrivicyPolicy';
import ShopRight from './pages/ShopRight';
import ShopLeft from './pages/ShopLeft';
import TermCondition from './pages/TermCondition';
import ShopGird from './pages/ShopGird';
import { createContext } from 'react';
import ShopSingle from './pages/ShopSingle';
import Cart from './pages/Cart'
import WhistList from './pages/WhistList';
import ContactUs from './pages/ContactUs';
import Checkout from './pages/Checkout';
const FirstName=createContext()
const LastName=createContext()
function App() {
  return (
<FirstName.Provider value={"ali"}>
<LastName.Provider value={"javed"}>

    <div className="App">
     <Router>
          <Routes>
          <Route exact path="/Checkout" element={<Checkout/>}></Route>
          <Route exact path="/Feature" element={<Feature/>}></Route>

          
          <Route exact path="/ContactUs" element={<ContactUs/>}></Route>
          <Route exact path="/Cart" element={<Cart/>}></Route>


          <Route exact path="/" element={< Home />}></Route>
            <Route exact path="/WhistList" element={< WhistList />}></Route>
            <Route exact path="/ShopGird" element={<ShopGird />}></Route>

            <Route exact path="/ShopSingle" element={<ShopSingle />}></Route>

            <Route exact path="/ShopLeft" element={< ShopLeft />}></Route>
            <Route exact path="/ShopRight" element={< ShopRight />}></Route>

            <Route exact path="/TermCondition" element={< TermCondition />}></Route>

            <Route exact path="/PrivicyPolicy" element={< PrivicyPolicy />}></Route>

            <Route exact path="/ForgetPassoword" element={< ForgetPassword />}></Route>

            <Route exact path="/Register" element={< Register />}></Route>

            <Route exact path="/Login" element={< Login />}></Route>

            <Route exact path="/Faq" element={< Faq />}></Route>

            <Route exact path="/Testimoniels" element={< Testimonials />}></Route>

            <Route exact path="/OurApp" element={< OurApp />}></Route>

            <Route exact path="/Reservation" element={< Reservation />}></Route>

            <Route exact path="/SearchLocation" element={< SearchLoaction />}></Route>

            <Route exact path="/Gellery" element={< Gellery />}></Route>

            <Route exact path="/Feature" element={< Feature />}></Route>

            <Route exact path="/AboutUs" element={< About />}></Route>

            <Route exact path="/ServiceDetail" element={< ServiceDetail />}></Route>

            <Route exact path="/Service" element={< Service />}></Route>

            <Route exact path="/Home2" element={< Home2 />}></Route>
            <Route exact path="/Home3" element={< Home3 />}></Route>






          </Routes>
        </Router>
    </div>
</LastName.Provider>
</FirstName.Provider>
  );
}

export default App;
export {FirstName};
export {LastName};
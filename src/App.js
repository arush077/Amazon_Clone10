
import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Header/>

      <Routes>
        


      <Route path="/checkout" element={<Checkout />}></Route>


        {/* home wala sabse niche hona chahiye */}
        <Route path="/" element={<Home />}></Route>
        
          
        
       </Routes>
    </BrowserRouter>
   
  );
}

export default App;

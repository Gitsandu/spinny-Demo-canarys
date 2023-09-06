
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Landingpagehead from './components/Landingpagehead';
import BuyCarComponent from './components/BuyCarComponent ';
import SellCarComponent from './components/SellCarComponent ';
import Mainbody from './components/Mainbody';

function App() {
  return (
    <div className="App">
      <Router>
        <Mainbody></Mainbody>
        <Routes>
          <Route path="/buy-car" element={<BuyCarComponent />} />
          <Route path="/sell-car" element={<SellCarComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

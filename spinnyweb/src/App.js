
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Landingpagehead from './components/Landingpagehead';
import BuyCarComponent from './components/BuyCarComponent ';
import SellCarComponent from './components/SellCarComponent ';

function App() {
  return (
    <div className="App">
      <Router>
        <Landingpagehead />
        <Routes>
          <Route path="/buy-car" element={<BuyCarComponent />} />
          <Route path="/sell-car" element={<SellCarComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

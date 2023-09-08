import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BuyCarComponent from './components/BuyCarComponent ';
import SellCarComponent from './components/SellCarComponent ';
import Mainbody from './components/Mainbody';
import ProductInfo from './components/ProductInfo';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Mainbody />} />
          <Route path="/buy-car" element={<BuyCarComponent />} />
          <Route path="/sell-car" element={<SellCarComponent />} />
          <Route path="/prod-info" element={<ProductInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

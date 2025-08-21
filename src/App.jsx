import { Routes, Route, Navigate } from 'react-router-dom';
import Products from './pages/producte';
import Cart from './pages/cart';
import Checkout from './pages/checkout';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

import { LandingPage } from './pages/LandingPage';
import { CustomerLayout } from './pages/customer/CustomerLayout';
import { MenuPage } from './pages/customer/MenuPage';
import { CartPage } from './pages/customer/CartPage';
import { POSLayout } from './pages/pos/POSLayout';
import { POSDashboard } from './pages/pos/POSDashboard';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          
          <Route path="/customer" element={<CustomerLayout />}>
            <Route index element={<MenuPage />} />
            <Route path="cart" element={<CartPage />} />
          </Route>

          <Route path="/pos" element={<POSLayout />}>
            <Route index element={<POSDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

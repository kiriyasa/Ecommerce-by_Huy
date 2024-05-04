import './App.css'
import { ProductsContextProvider } from './context/ProductsContext';
import { CartContextProvider } from './context/CartContext';
import { AuthContextProvider} from './context/AuthContext'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from '../src/pages/Login'
import Register from '../src/pages/Register'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Cashout from './pages/Cashout'
import Admin from './pages/Admin'

function App() {
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <CartContextProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/shop/cart" element={<Cart/>}/>
                <Route path="/cashout" element={<Cashout/>}/>
                <Route path="/admin" element={<Admin/>}/>
              </Routes>
            </BrowserRouter>
        </CartContextProvider>
      </ProductsContextProvider>
    </AuthContextProvider>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  // State để quản lý giỏ hàng
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  const handleCheckout = () => {
    setCartItems([]);
  };

  // State để lấy dữ liệu từ API
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('/api/data') // Đảm bảo rằng bạn có route này trên server
      .then((response) => response.json())
      .then((data) => setData(data.message));
  }, []);

  // State để quản lý sản phẩm trong trang admin
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/products') // Đảm bảo rằng server của bạn đang chạy
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  return (
    <BrowserRouter>
      <Header cartItems={cartItems} />
      <Routes>
        <Route path='/' element={<Products handleAddToCart={handleAddToCart} />} />
        <Route path='/detail/:id' element={<ProductDetails handleAddToCart={handleAddToCart} />} />
        <Route path='/cart' element={<Cart cartItems={cartItems} handleCheckout={handleCheckout} />} />
        <Route path='/admin' element={
          <div>
            <h2>Products</h2>
            <ul>
              {products.map(product => (
                <li key={product._id}>{product.name} - ${product.price}</li>
              ))}
            </ul>
          </div>
        } />
      </Routes>
      <div>
        <h1>{data ? data : 'Đang tải...'}</h1>
      </div>
    </BrowserRouter>
  );
}

export default App;

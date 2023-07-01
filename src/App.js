import logo from './logo.svg';
import './App.css';
import Users from './Users';
import Hometodo from './Todo-list/Hometodo';
import ProductSearch from './home-assigment13/ProductSearch';
import {Routes,Route} from 'react-router-dom';
import { Home } from './Ecommerce/Home';
import { Products } from './Ecommerce/Products';
import Navbar from './Ecommerce/Navbar';
import { Addtocart } from './Ecommerce/Addtocart';
import Cart from './Ecommerce/Cart';

function App() {
  return (
    <div className="App">
     {/* <Users /> */}
     {/* <Hometodo /> */}
     {/* <ProductSearch /> */}
     <Navbar />
     <Routes>
      <Route path="/" element={<Home />}>Home</Route>
      <Route path="/products" element={<Products />}>Products</Route>
      <Route path="/addtocart/:id" element={<Addtocart />}>Products</Route>
     </Routes>
    </div>
  );
}
export default App;


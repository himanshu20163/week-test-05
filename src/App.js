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
import { useSelector } from 'react-redux';
import ThemeToggle from './Redux/ThemeToggle';

function App() {
  const theme = useSelector((state) => state.theme);
  return (
    <div className="App">
     {/* <Users /> */}
     {/* <Hometodo /> */}
     {/* <ProductSearch /> */}
     {/* <Navbar />
     <Routes>
      <Route path="/" element={<Home />}>Home</Route>
      <Route path="/products" element={<Products />}>Products</Route>
      <Route path="/addtocart/:id" element={<Addtocart />}>Products</Route>
     </Routes> */}
     <div className={`app ${theme}`}>
      {/* <Header />
      <About />
      <Feature />
      <Portfolio />
      <Footer /> */}
       {/* <Routes>
           <Route path='/' element={<Movie_App />}></Route>
           <Route path='/moviedetails:movieid' element={<Movie_details />}></Route>
        </Routes> */}
      {/* <Comp2 /> */}
      
      <ul className={`list ${theme}`}>
        <li className={`item ${theme}`}>
          Home
        </li>
        <li className={`item ${theme}`}>
          About Us
        </li>
        <li className={`item ${theme}`}>
          Services
        </li>
        <li className={`item ${theme}`}>
          Contact Us
        </li>
        <li>
        <ThemeToggle />
        </li>
      </ul>
    </div>
    </div>
  );
}
export default App;


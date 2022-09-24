import logo from './logo.svg';
import './App.css';
import Nav from './Component/Nav';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Footer from './Component/Footer';
import Signup from './Component/Signup';
import Private from './Component/Private';
import Login from './Component/Login';
import AddProduct from './Component/AddProduct';
import Product from './Component/Product';
import UpdateProduct from './Component/UpdateProduct';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Nav/>
      <Routes>
      <Route element={<Private/>}>
        <Route path='/' element={<Product/>}/>
        <Route path='/add' element={<AddProduct/>}/>
        <Route path='/update/:id' element={<UpdateProduct/>}/>
        <Route path='/logout' element={<h1>Logout Component</h1>}/>
        </Route>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;

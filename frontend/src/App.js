import logo from './logo.svg';
import './App.css';
import Nav from './Component/Nav';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Footer from './Component/Footer';
import Signup from './Component/Signup';
import Private from './Component/Private';
import Login from './Component/Login';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Nav/>
      <Routes>
      <Route element={<Private/>}>
        <Route path='/' element={<h1>Product Component</h1>}/>
        <Route path='/add' element={<h1>Add Product Component</h1>}/>
        <Route path='/update' element={<h1>UpdateComponent</h1>}/>
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

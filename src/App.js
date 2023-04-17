import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import OurStore from './Pages/OurStore';
import Blog from './Pages/Blog';
import Contect from './Pages/Contect';
import CompareProduct from './Pages/CompareProduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/store' element={<OurStore/>} />
      <Route path='/blogs' element={<Blog/>} />
      <Route path='/contact' element={<Contect/>} />
      <Route path='/compare-product' element={<CompareProduct/>} />

      </Route >
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

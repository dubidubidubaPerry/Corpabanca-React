import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './components/navegacion/Navbar';
import Inicio from './components/paginas/Inicio';
import Items from './components/paginas/Items';
import Sesion from './components/paginas/Sesion';
import Servicios from './components/paginas/Servicios';
import Herramientas from './components/paginas/Herramientas';
import Contacto from './components/paginas/Contacto';
import CrearCuenta from './components/paginas/CrearCuenta';


function App() {
  return (
    <div className="App">
        
        <Router>
          <Navbar/>

          <Routes>
            <Route path='/' exact element={<Inicio/>}/>
            <Route path='/Servicios' element={<Servicios/>}/>
            <Route path='/Herramientas' element={<Herramientas/>}/>
            <Route path='/Contacto' element={<Contacto/>}/>
            <Route path='/CrearCuenta' element={<CrearCuenta/>}/>
            <Route path='/Sesion' element={<Sesion/>}/>
          </Routes>

        </Router>




    </div>
  );
}

export default App;

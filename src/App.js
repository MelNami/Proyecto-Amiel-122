import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar } from './components/navigation/Navbar';
import { Inicio } from './components/pages/Inicio';
import { PrimeraGeneracion } from './components/pages/PrimeraGeneracion';
import { SegundaGeneracion } from './components/pages/SegundaGeneracion';
import { TerceraGeneracion } from './components/pages/TerceraGeneracion';
import { CuartaGeneracion } from './components/pages/CuartaGeneracion';
import { QuintaGeneracion } from './components/pages/QuintaGeneracion';
import { SextaGeneracion } from './components/pages/SextaGeneracion';
import { Formulario } from './components/pages/Formulario';
import { Conclusion } from './components/pages/Conclusion';
import { Creditos } from './components/pages/Creditos';

function App() {
  return (
    <header className="App">
      <Router>
        <Navbar />
        <Routes>
            <Route path='/src/components/pages/Inicio.js' exact Component={Inicio}/>
            <Route path='/PrimeraGeneracion.js' exact Component={PrimeraGeneracion}/>
            <Route path='/SegundaGeneracion.js' exact Component={SegundaGeneracion}/>
            <Route path='/TerceraGeneracion.js' exact Component={TerceraGeneracion}/>
            <Route path='/CuartaGeneracion.js' exact Component={CuartaGeneracion}/>
            <Route path='/QuintaGeneracion.js' exact Component={QuintaGeneracion}/>
            <Route path='/SextaGeneracion.js' exact Component={SextaGeneracion}/>
            <Route path='/Formulario.js' exact Component={Formulario}/>
            <Route path='/Conclusion.js' exact Component={Conclusion}/>
            <Route path='/Creditos.js' exact Component={Creditos}/>
            
        </Routes>
      </Router>
    </header>
    
  );
}
export default App;

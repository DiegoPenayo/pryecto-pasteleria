
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './componentes/navegacion/Navbar';
import inicio from './componentes/navegacion/paginas/Inicio';
import items from './componentes/navegacion/paginas/Items';
import contacto from './componentes/navegacion/paginas/Contacto';

function App() {
  return (
    <div className="App">


      <Router>
        <Navbar>
          <Routes>
            <Route path='/' exact component={inicio}/>
            <Route path='/Items' exact component={items}/>
            <Route path='/Contacto' exact component={contacto}/>
          </Routes>
        </Navbar>
      </Router>
    
    </div>
  );
}

export default App;

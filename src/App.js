
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './componentes/navegacion/Navbar';
import Inicio from './componentes/navegacion/paginas/Inicio';
import Items from './componentes/navegacion/paginas/Items';
import Contacto from './componentes/navegacion/paginas/Contacto';

function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/'>
              <Route index element={<Inicio/>}/>
            </Route>

            <Route path='/Productos'>
              <Route index element={<Items/>}/>
            </Route>

            <Route path='/Contacto'>
              <Route index element={<Contacto/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;

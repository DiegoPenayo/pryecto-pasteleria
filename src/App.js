
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
        <Navbar>
          <Routes>
            <Route path='/'>
              <Route path='/' index element={<Inicio/>}/>
            </Route>

            <Route path='/Productos'>
              <Route path='/' index element={<Items/>}/>
            </Route>

            <Route path='/Contacto'>
              <Route path='/' index element={<Contacto/>}/>
            </Route>
            {/* <Route path='/' exact component={inicio}/>
            <Route path='/Items' exact component={items}/>
            <Route path='/Contacto' exact component={contacto}/> */}
          </Routes>
        </Navbar>
      </BrowserRouter>
    
    </div>
  );
}

export default App;

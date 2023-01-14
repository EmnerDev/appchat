import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './componentes/Login';
import Account from './componentes/Account';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/cuenta' element={<Account></Account>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

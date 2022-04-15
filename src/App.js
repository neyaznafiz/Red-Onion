import './App.css';
import Header from './Components/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Cart from './Components/Pages/Cart/Cart';
import Login from './Components/Pages/Login/Login';
import SignUp from './Components/Pages/SignUp/SignUp';

function App() {
  return (
    <div className="">
      <Header></Header>

      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>

      </Routes>
    </div>
  );
}

export default App;

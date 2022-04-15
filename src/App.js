import './App.css';
import Header from './Components/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home/Home';
import Cart from './Components/Pages/Cart/Cart';
import Login from './Components/Pages/Login/Login';
import SignUp from './Components/Pages/SignUp/SignUp';
import Breakfast from './Components/Pages/Home/FoodSection/Breakfast/Breakfast';
import Lunch from './Components/Pages/Home/FoodSection/Lunch/Lunch';
import Dinner from './Components/Pages/Home/FoodSection/Dinner/Dinner';

function App() {
  return (
    <div className="">
      <Header></Header>

      <Routes>

        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}>

          <Route path='/breakfast' element={<Breakfast></Breakfast>}></Route>
          <Route path='/lunch' element={<Lunch></Lunch>}></Route>
          <Route path='/dinner' element={<Dinner></Dinner>}></Route>
          
        </Route>

        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>

      </Routes>
    </div>
  );
}

export default App;

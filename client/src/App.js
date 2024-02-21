// import logo from './logo.svg';
import{ BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import './App.css'; 
import CreateHotel from'./components/CreateHotel';
import ShowHotellist from'./components/ShowHotellist';
import ShowHotelDetails from'./components/ShowHotelDetails';
import UpdateHotelinfo from'./components/UpdateHotelinfo';
import HotelCard from'./components/HotelCard'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AllRoutes from './components/Routes';



const App=() =>{
  return (
<Router>
  <div>
  <Navbar/>
    <Routes>
    <Route exact path='/home' element={<Home/>}/>
      <Route  path='/all-hotel' element={<ShowHotellist/>}/>
      <Route  path='/create-hotel/' element={<CreateHotel/>}/>
      <Route  path='/edit-hotel/:id' element={<UpdateHotelinfo/>}/>
      <Route  path='/Show-hotel/:id' element={<ShowHotelDetails/>}/>
      <Route  path='/all-routes' element={<AllRoutes/>}/>
    </Routes>
    <Footer/>
  </div>
  
</Router>    
  );
}

export default App;

// import logo from './logo.svg';
import{ BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import './App.css';
 
import CreateHotel from'./components/CreateHotel';
import ShowHotellist from'./components/ShowHotellist';
import ShowHotelDetails from'./components/ShowHotelDetails';
import UpdateHotelinfo from'./components/UpdateHotelinfo';

const App=() =>{
  return (
<Router>
  <div>
    <Routes>
      <Route exact path='/' element={<ShowHotellist/>}/>
      <Route  path='/create-hotel/' element={<CreateHotel/>}/>
      <Route  path='/edit-hotel/' element={<UpdateHotelinfo/>}/>
      <Route  path='/Show-hotel/:id' element={<ShowHotelDetails/>}/>
    </Routes>
  </div>
</Router>    

  );
}

export default App;

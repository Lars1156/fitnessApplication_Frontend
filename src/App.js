import './App.css';
import { Routes , Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import AdminLogin from './Components/Pages/Adminlogin';
import AdminPannel from './Components/Pages/AdminPannel';
import UserLogin from './Components/Pages/UserLogin';
import TrainerDashboard from './Components/Dashborad/TrainerDashboard';
import Services from './Components/Pages/Services';
import AboutUs from './Components/Pages/AboutUs';
import Home from './Components/Pages/Home';
import { Footer } from 'antd/es/layout/layout';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/admin-login' element={<AdminLogin/>}/>
         <Route path='/admin_pannel' element={<AdminPannel/>}/>
         <Route path='/user-login'  element ={<UserLogin/>}/>
         <Route path='/trainer_dashboard' element={<TrainerDashboard/>}/>
         <Route path='/services' element={<Services/>}/>
         <Route path='/about' element = {<AboutUs/>}/>
         <Route path='/footer' element={<Footer/>}/>
      </Routes>
      
    </div>
  );
}

export default App;

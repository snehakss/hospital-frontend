import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Departments from './components/Departments';
import LoginDoctor from './components/LoginDoctor';
import Appointment from './components/Appointment';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import ViewAppointments from './components/ViewAppointments';
import NavDoctor from './components/NavDoctor';
import LoginAdmin from './components/LoginAdmin';
import LoginStaff from './components/LoginStaff';
import CancelAppointment from './components/CancelAppointment';
import AppointmentStaff from './components/AppointmentStaff';
import BookingAppointment from './components/BookingAppointment';
import ViewAppointmentAdmin from './components/ViewAppointmentAdmin';
import CancelAppointmentAdmin from './components/CancelAppointmentAdmin';
import ProfileStaff from './components/ProfileStaff';
import ViewStaff from './components/ViewStaff';
import RemoveStaff from './components/RemoveStaff';
import ProfileEntry from './components/ProfileEntry';
import Find from './components/Find';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Nav/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/department' element={<Departments/>}/>
        <Route path='/logindoctor'element={<LoginDoctor/>}/>
        <Route path='/appointment' element={<Appointment/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/viewappointment' element={<ViewAppointments/>}/>
        <Route path='/navdoctor' element={<NavDoctor/>}/>
        <Route path='/loginadmin' element={<LoginAdmin/>}/>
        <Route path='/loginstaff' element={<LoginStaff/>}/>
        <Route path='/cancelappointment' element={<CancelAppointment/>}/>
      <Route path='/viewappointmentstaff' element={<AppointmentStaff/>}/>
      <Route path='/bookingappointmentadmin' element={<BookingAppointment/>}/>
      <Route path='/viewappointmentadmin' element={<ViewAppointmentAdmin/>}/>
      <Route path='/cancelappointmentadmin' element={<CancelAppointmentAdmin/>}/>
      <Route path='/profilestaff' element={<ProfileStaff/>}/>
      <Route path='/viewstaff' element={<ViewStaff/>}/>
      <Route path='/removestaff' element={<RemoveStaff/>}/>
      <Route path='/profileAdmin' element={<ProfileEntry/>}/>
      <Route path='/find' element={<Find/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

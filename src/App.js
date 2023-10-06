import './App.css';
import TextChanger from './Components/TextChanger';
import UseState from './Components/UseState';
import Props from './Components/Props';
import EventHandler from './Components/EventHandler';
import FormEvents from './Components/FormEvents';
import KeyboardEvents from './Components/KeyboardEvents';
import UseEffect from './Components/UseEffect';
import Arrays from './Components/Arrays';
import Objects from './Components/Objects';
import UserProvider from './Components/UserProvider';
import UserProfile from './Components/UserProfile';
import Login from './Components/Login';
import Navigation from './Components/Navigation';
import Users from './Components/Users';
import ProtectedRoute from './Components/ProtectedRoute';
import Counter from './Components/Counter';
import ParentComponent from './Components/UseCallback';
import Square from './Components/UseMemo';
import { useState } from 'react';
import Ref from './Components/UseRef';
import Layout from './Components/UseLayout';
import Error from './Components/Error';
import Dashboard from './Components/Dashboard';
import Profile from './Components/Profile';
import Post from './Components/Post';
import Controlled_seperate from './Components/Controlled_seperate';
import FormValidation from './Components/FormValidation';
import Async from './Components/Async';
import UseNavigate from './Components/UseNavigate';
import Formik from './Components/Formik';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Navigation />} />
    //     <Route path="/counter" element={<Counter />} />
    //     <Route path="/dashboard" element={<Dashboard />} />
    //     <Route path="/dashboard/profile" element={<Profile />} />
    //     <Route path="/posts/:params" element={<Post />} />
    //     <Route path="*" element={<Error />} />

    //     <Route path="/useNavigate" element={<UseNavigate />} />
    //   </Routes>
    // </Router>

    //Protected Routes

    // <Router>
    //   <UserProvider>
    //     <Routes>
    //       <Route path="/" element={<Login />} />
    //       <Route element={<ProtectedRoute/>}>
    //         <Route path="/userProfile" element={<UserProfile />} />
    //       </Route>
    //     </Routes>
    //   </UserProvider>
    // </Router>

    //

    //Forms

    // <FormValidation />
    // <Async/>
    <Formik/>
    );
  }
  
  export default App;


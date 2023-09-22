import './App.css';
import TextChanger from './Components/TextChanger';
import Component2 from './Components/Component2';
import New from './Components/New';
import State from './Components/State';
import Change from './Components/change';
import Change2 from './Components/change2';
import Props from './Components/Props';
import EventHandler from './Components/EventHandler';
import FormEvents from './Components/FormEvents';
import UseEffect from './Components/UseEffect';
import Arrays from './Components/Arrays';
import Objects from './Components/Objects';
import UserProvider from './Components/UserProvider';
import UserProfile from './Components/UserProfile';
import Login from './Components/Login';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Users from './Components/Users';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <UserProvider>
      <Router>
        <Navigation /> 
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/profile" element={<UserProfile />} /> */}
          <Route path="/profile/*" element={<UserProfile />} />
          <Route path="/users/*" element={<Users />} />
          {/* <Route path="/users/*" element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>} 
          /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;

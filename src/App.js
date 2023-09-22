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
import Counter from './Components/UseReducer';

function App() {
  return (
    <UserProvider>
      <Login />
      <UserProfile />
    </UserProvider>
  );
}

export default App;

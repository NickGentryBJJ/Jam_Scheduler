import React from 'react';
import { Route } from 'react-router-dom';
import SignupForm from './components/SignUp/SignUpForm';
import { Switch } from 'react-router-dom/cjs/react-router-dom';
import Splash from './components/Splash/Splash';
import NavBar from './components/Navigation/NavBar';
import LogIn from './components/LogIn/LogIn';
import UserShowPage from './components/UserShow/UserShowPage/UserShowPage';
import EventShow from './components/Events/EventShow/EventShow';
import CreateEvent from './components/Events/CreateEvent/CreateEvent';


function App() {
  return (
    <>
    <NavBar/>
    <Switch>
      <Route path='/users/:userId'>
        <UserShowPage/>
      </Route>
      <Route path='/events/:eventId'>
        <EventShow/>
      </Route>
      <Route path='/events'>
        <CreateEvent/>
      </Route>
      <Route path='/login'>
        <LogIn/>
      </Route>
      <Route path='/signup'>
        <SignupForm/>
      </Route>
      <Route path='/'>
        <Splash/>
      </Route>
    </Switch>
    </>
    
  );
}

export default App;

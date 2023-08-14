import React from 'react';
import { Route } from 'react-router-dom';
import SignupForm from './components/SignUp/SignUpForm';
import { Switch } from 'react-router-dom/cjs/react-router-dom';
import Splash from './components/Splash/Splash';
import NavBar from './components/Navigation/NavBar';
import LogIn from './components/LogIn/LogIn';


function App() {
  return (
    <>
    <NavBar/>
    <Switch>
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

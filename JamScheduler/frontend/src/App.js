import React from 'react';
import { Route } from 'react-router-dom';
import SignupForm from './components/SignUp/SignUpForm';
import { Switch } from 'react-router-dom/cjs/react-router-dom';
import Splash from './components/Splash/Splash';


function App() {
  return (
    <>
    <Switch>
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

import React from 'react';
import { Route } from 'react-router-dom';
import SignupForm from './components/SignUp/SignUpForm';
import { Switch } from 'react-router-dom/cjs/react-router-dom';


function App() {
  console.log("Hello from APp")
  return (
   
    <>
    <Switch>
      <Route path='/signup'>
        <SignupForm/>
      </Route>
    </Switch>
    </>
    
  );
}

export default App;

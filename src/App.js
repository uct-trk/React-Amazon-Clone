import React, { useEffect } from 'react'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import { auth } from './Firebase/firebase';
import { useStateValue } from './Context/StateProvider';


function App() {

  const [{}, dispatch] = useStateValue()
  

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("The user is>>>", authUser)
      if (authUser){
        // user just logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        }) 
      } else {
        // user was logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    }) 
  },[])

  return (
    <Router>
      <div className="App">
      
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>

          <Route exact path="/">
          <Header />
          <Home />
          </Route>

          <Route exact path="/checkout">
            <Header />
            <Checkout/>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;

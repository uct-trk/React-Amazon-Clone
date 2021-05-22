import React from 'react'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Switch>

          <Route exact path="/">
          <Home />
          </Route>

          <Route exact path="/checkout">
            <Checkout/>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;

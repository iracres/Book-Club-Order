import React from 'react';
import { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'

import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import ForgotPassword from './components/auth/ForgotPassword'
import BaristaHome from './components/BaristaLanding/BaristaHome'
import Restock from './components/Restock/Restock'
import OrderBar from './components/OrderBar/OrderBar'
import ClientHome from './components/ClientHome/HomePage'


class App extends Component {

  render() {
    return (
      <Router>
          <Route exact path="/" component= { SignIn } />
          <Route path="/SignUp" component= { SignUp } />
          <Route path="/ForgotPassword" component= { ForgotPassword } />

          <Route path="/BaristaHome" component= { BaristaHome } />
          <Route path="/Restock" component= { Restock } />
          
          <Route path="/OrderBar" component= { OrderBar } />
          <Route path="/ClientHome" component= { ClientHome } />
      </Router>

    );
  }
}


export default App;

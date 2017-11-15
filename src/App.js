import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Redirect,
  Switch,
  Link,
  Route
} from 'react-router-dom';
import {connect} from 'react-redux';
import Login from './components/login/login';
import SignUp from './components/signup/signup';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/signup' component={SignUp} />

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

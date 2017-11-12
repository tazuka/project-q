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


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Login} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

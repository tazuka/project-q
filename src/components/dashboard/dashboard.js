import React, {Component} from 'react';
import { Redirect } from 'react-router';
import {connect} from 'react-redux';
import * as firebase from 'firebase';

import './dashboard.css';


export class dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: false
    }
    // console.log(user);

  }

  componentWillMount() {
    const user = localStorage.getItem('user');
    if (user) {
      this.setState({user: true})
    }

  }

onClick = (e) => {
  console.log(this.state.user);
  firebase.auth().signOut()
    .then((response) => {
    console.log(this.state.user);
  localStorage.removeItem('user');
  this.setState({user: false})
  console.log(this.state.user);
}).catch(function(error) {

});

}


  render() {
    console.log('log out')
    console.log(this.state.user);
    if (this.state.user === false) {
      console.log(this.user);
      return <Redirect to ='/' />
    }
    return (
      <div>
        <div id='topBar'>
          Qord
          <div id='logoutBtn'>
            <button type='submit' onClick={this.onClick}>Log out</button>
          </div>
        </div>
        <div id='sideBar'>
          <ul>
            <li>Sales Summary</li>
            <li>Menu</li>
          </ul>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.userResult
  }
}


export default connect (mapStateToProps, null)(dashboard);

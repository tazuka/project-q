import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as firebase from 'firebase';

import './login.css';

export class login extends React.Component {
  constructor(props) {
    super(props);

    //Initialize starting state
    this.state = {
      username:"",
      password:""
    }
  }


//Onchange event to capture user input
  handleUser = (e) => {
    let username = e.target.value;
    this.setState({username: username});
    console.log(username);
  }
//Onchange event to capture password input
  handlePassword = (e) => {
    let password = e.target.value;
    this.setState({password: password});
    console.log(password);
  }

//OnClick event to submit login credentials to firebase
  onClick = (e) => {
    firebase.auth().createUserWithEmailAndPassword(this.state.username, this.state.password).then(function() {
      this.props.history.push('/path')
}, function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
    } else {
        console.error(error);
    }
    // [END_EXCLUDE]
});


  }

  render() {
    return (<div>
              <h1>Qord - No more waiting time!</h1>
              <div id='wrapper'>
                <h2>Login here!</h2>
                <div id='loginFields'>
                  <p>User Name:<br />
                    <input type='email' onChange={this.handleUser}/>
                  </p>
                  <p>Password:<br />
                    <input type='Password' onChange={this.handlePassword}/>
                  </p>
                  <button type='button' className='buttons' onClick={this.onClick}>Login</button>
                  <button type='button'><Link to='/signup' className='buttons'>Sign Up</Link></button>
                </div>
              </div>


            </div>);
  }
}


export default login;

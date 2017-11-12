import React, {Component} from 'react';
import './login.css';

export class login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
              <h1>Project Q</h1>
              <div id='wrapper'>
                <div id='loginFields'>
                  <p>User Name:
                    <input type='text' />
                  </p>
                  <p>Password:
                    <input type='Password' />
                  </p>
                </div>
              </div>


            </div>);
  }
}


export default login;

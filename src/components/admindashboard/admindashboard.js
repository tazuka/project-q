import React, {Component} from 'react';
import VendorList from '../vendorlist/vendorlist';
import Vendor from '../vendor/vendor';
import * as firebase from 'firebase';
import './admindashboard.css';

export class admindashboard extends React.Component {
  constructor(props) {
    super(props);
  }

onClick = (e) => {
  // Get a reference to the database service
  const database = firebase.database();

}

componentWillMount() {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user.email);
  if (user) {
    this.setState({user: true})
    this.setState({userEmail: user.email})
  }

}
  render() {
    return (
      <div>
        <input type='text' placeholder='Enter Vendor Name' id='search' onChange={this.onChange}></input>
        <button type='button' id='btnSearch' onClick={this.onClick}>Search</button>
        <button type='button' id='btnSearch' onClick={this.onClick}>Add New</button>
        <VendorList />
        <Vendor />
     </div>);
  }
}

export default admindashboard;

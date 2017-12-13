import React, {Component} from 'react';
import uuid from 'uuid';
import * as firebase from 'firebase';


export class addvendor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vendorName: '',
      vendorID: ''
    }
  }

  vendorInput = (e) => {
    let vendorName = e.target.value;
    this.setState({vendorName: vendorName});

  }

  idInput = (e) => {
    let vendorID = e.target.value;
    this.setState({vendorID: vendorID});

  }

  onClick = (e) => {
    firebase.database().ref('vendors/' + this.state.vendorID).set({
      VendorName: this.state.vendorName
    }).then(() => {
        console.log("save successful");
      });

  }


//   export const employeesFetch = () => {
//   const { currentUser } = firebase.auth();
//   return (dispatch) => {
//     //.on(): anytime a data/value comes cross this ref(), call this function snapshot => {}
//     //with an object to describe the data sitting in there, the object is snapshot.
//     //At any point of time in the life cycle of the app, whenever we get a new data,
//     //we dispatch an action.
//     //snapshot.val(): this is how we get access to the data in ref().
//     firebase.database().ref(`/vendors/${currentUser.uid}/employees`)
//       .on('value', snapshot => {
//         dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
//       });
//   };
// };


  render() {
    return (
      <div>
        <input type='text' onChange={this.vendorInput}/><br />
        <input type='text' onChange={this.idInput}/><br />
        <button type='button' id='btnSearch' onClick={this.onClick}>Save</button>


      </div>);
  }
}

export default addvendor;

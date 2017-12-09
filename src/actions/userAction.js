import * as firebase from 'firebase';

export const loginSuccess = (user) => {
  console.log('action 2');
  return {
    type: 'USER_LOGIN_SUCCESS',
    user
  }
}

export const logoutSuccess = (user) => {
  console.log('action 2');
  return {
    type: 'USER_LOGIN_SUCCESS',
    user
  }
}




export const firebaseLogin = (username, password) => {
  console.log('action firebase');
  return (dispatch) => {

  firebase.auth().signInWithEmailAndPassword(username, password)
    .then((response) => {
      console.log(response);
      if (response) {
        localStorage.setItem('user', JSON.stringify(response));
        dispatch(loginSuccess(response));

      }

    })
    .catch((error)=> {
      console.error("Login Unsuccessful")
    });

}
}

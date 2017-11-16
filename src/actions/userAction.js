import * as firebase from 'firebase';

export const loginSuccess = (user) => {
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
      .then( (response) => {
      const user = response.data
      dispatch(loginSuccess(user));
    })
      .catch((error)=> {
        console.error("Login Unsuccessful")

    });
  }

}

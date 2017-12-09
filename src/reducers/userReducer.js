
const initialState = {
  isLoggedIn: ""
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN_SUCCESS':
    console.log('reducer');
      return {
        ...state,
        isLoggedIn: action.user,
      }
      break;


      default:
        return state
  }
}


export default userReducer;

const initialState = {
  response: '',
  registered: false,
  loginError: '',
  authorized: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'REGISTER':
      return {...state, response: action.payload.message, registered: action.payload.registered}
    case 'LOGIN':
      return {...state, loginError: action.payload.loginerr, authorized: action.payload.authorized}
    default:
      return state
  }
}
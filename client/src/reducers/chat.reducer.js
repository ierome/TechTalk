const initialState = {
    messages: []
  }
  
  export default function(state = initialState, action) {
    switch (action.type) {
        case 'NEW_MESSAGE':
            return {...state, messages: [...state.messages, action.payload]}
      default:
        return state
    }
  }
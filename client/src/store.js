import { createStore, combineReducers } from 'redux'

import registerReducer from './reducers/register.reducer'
import chatReducer from './reducers/chat.reducer'

const rootReducer = combineReducers({register: registerReducer, chat: chatReducer})

const store = createStore(rootReducer)

export default store
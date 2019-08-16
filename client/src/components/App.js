import React from 'react'
import 'normalize.css/normalize.css'
import { Provider } from 'react-redux'
import store from '../store'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Auth from './Auth'
import Login from './Login'
import Register from './Register'
import AuthRoute from './AuthRoute'
import Dashboard from './Dashboard'

export default props => {

  return (
    <Provider store={store}>
      <Router>
      <div>
        <Route exact path="/" component={Auth} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <AuthRoute path="/dashboard/:channel" component={Dashboard} />
      </div>
      </Router>
    </Provider>
  )
}
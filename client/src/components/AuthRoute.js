import React from 'react'
import {useSelector} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'

export default props => {
const authorized = useSelector(appState => appState.register.authorized)
    
    return authorized ? <Route {...props}></Route> : <Redirect to="/login"></Redirect>
}
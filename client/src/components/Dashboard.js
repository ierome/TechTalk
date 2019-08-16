import React from 'react'
import { Menu } from 'semantic-ui-react'
import '../styles/dashboard.css'
import {logoutUser} from '../actions/actions'
import ChatInput from './ChatInput'
import {Link} from 'react-router-dom'

export default props => {
    const username = localStorage.getItem("username")
    const channel = props.match.params.channel
    console.log(channel)

    function logout() {
        logoutUser()
    }

    return (
        <div id="dashboardWrapper">
            <div id="navbar">
                <h1>TechTalk</h1>
                <h3>Welcome back {username}</h3>
                <h1>Channels</h1>
                <Link to="/dashboard/general"><li>General</li></Link>
                <li>Tech Talk</li>
                <h1>Direct Messages</h1>
                <button id="logoutButton" onClick={logout}>Logout</button>
            </div>
            <div id="chatEntry">
            <div id="chatbox">
            <p>{channel === "" ? "Its empty" : "You in a channel!"}</p>
            </div>
            <ChatInput/>
            </div>
        </div>
    )
}
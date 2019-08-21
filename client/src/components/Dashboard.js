import React, { useState } from 'react'
import '../styles/dashboard.css'
import {logoutUser} from '../actions/actions'
import ChatInput from './ChatInput'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export default props => {
    const [createRoomInput, setCreateRoomInput] = useState('')
    const messages = useSelector(appState => appState.chat.messages)


    const username = localStorage.getItem("username")
    const channel = props.match.params.channel

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
                <Modal trigger={<Button>Create a Room</Button>} closeIcon>
    <Header icon='globe' content='Create a chatroom' />
    <Modal.Content>
    <div id="createRoom">
      <p>
        Create your own chat room for others to join!
      </p>
      <label forHtml="createRoom">Room name
      <input type="text" id="createRoom" value={createRoomInput} onChange={e => setCreateRoomInput(e.target.value)}/>
      </label>
      </div>
    </Modal.Content>
    <Modal.Actions>
      <Button color='green'>
        <Icon name='checkmark' /> Create room!
      </Button>
    </Modal.Actions>
  </Modal>
                <button id="logoutButton" onClick={logout}>Logout</button>
            </div>
            <div id="chatEntry">
            <div id="chatbox">
                {messages.map(item => {
                    return (
                        <p><span className="username">{item.username}:</span> {item.text}</p>
                    )
                })}
            </div>
            <ChatInput channel={props.match.params.channel}/>
            </div>
        </div>
    )
}
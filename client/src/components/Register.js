import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import '../styles/login.css'
import { Button, Input, Form, Header, HeaderContent, Icon } from 'semantic-ui-react'
import {registerUser} from '../actions/actions'
import {useSelector} from 'react-redux'

export default props => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [registerResponse, setRegisterResponse] = useState('hide')

    const registered = useSelector(appState => appState.register.registered)
    const response = useSelector(appState => appState.register.response)
    console.log(registered, response)
    function register(e) {
       e.preventDefault()
       registerUser(username, password)
       setUsername('')
       setPassword('')
       setRegisterResponse('')
    }

    return (
        <div id="loginWrapper">
              <Header as='h1'>
                <Icon name='coffee' />
                <Header.Content>TechTalk</Header.Content>
            </Header>
            <Form className="loginForm">
                <Link to="/login" id="backLogin">Back to login</Link>
                <div className={registerResponse}>
                <p>{response}</p>
                </div>
                <h5>Register</h5>
                <input type="text" placeholder="Username" id="usernameInput" value={username} onChange={e => setUsername(e.target.value)}/>
                <input type="password" placeholder="Password" id="passwordInput" value={password} onChange={e => setPassword(e.target.value)}/>
                <Button secondary id="loginSubmit" onClick={register}>Register</Button>
            </Form>
        </div>
    )
}
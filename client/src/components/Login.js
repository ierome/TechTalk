import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import '../styles/login.css'
import { Button, Input, Form, Header, HeaderContent, Icon } from 'semantic-ui-react'
import LoadingOverlay from 'react-loading-overlay';
import {attemptLogin} from '../actions/actions'
import { Redirect } from 'react-router-dom'


export default props => {
const loginResponse = useSelector(appState => appState.register.loginError)
const auth = useSelector(appState => appState.register.authorized)
console.log(auth)

const [loading, setLoading] = useState(false)
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')

    function sendRegister(e) {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            props.history.push('/register')
        }, 1000)
    }
    function login() {
        attemptLogin(username, password)
        props.history.push('/dashboard/general')
    }

    return (
        auth ? <Redirect to="/dashboard/general"></Redirect> :
        <LoadingOverlay
        active={loading}
        spinner
        text='Loading your content...'>
        <div id="loginWrapper">
              <Header as='h1'>
                <Icon name='coffee' />
                <Header.Content>TechTalk</Header.Content>
            </Header>
            <Form className="loginForm" onSubmit={login}>
            {auth ? <p>Success!</p> : ''}
                {loginResponse ? <p>Invalid login attempt. Check your username or password</p> : <h5>Login</h5>}
                <input type="text" placeholder="Username" id="usernameInput" value={username} onChange={e => setUsername(e.target.value)}/>
                <input type="password" placeholder="Password" id="passwordInput" value={password} onChange={e => setPassword(e.target.value)}/>
                <Button primary id="loginSubmit">Login</Button>
                <Button secondary id="loginSubmit" onClick={sendRegister}>Register</Button>
            </Form>
        </div>
        </LoadingOverlay>
    )
}
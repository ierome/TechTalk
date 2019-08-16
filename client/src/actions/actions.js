import store from '../store'
import axios from 'axios'
import io from 'socket.io-client'


if (localStorage.getItem("username")) {
  console.log("Should be auth")
  store.dispatch({
    type: 'LOGIN',
    payload: {loginerr: false, authorized: true}
  })
}

// MUST CHANGE localhost to IP ADDRESS
const socket = io.connect('http://localhost:8000')

socket.on('new person', name => {
  console.log(name)
})

export function submitName(name) {
  socket.emit('name', name)
}

export function registerUser(username, password) {
axios.get(`/api/registerUser?username=${username}&password=${password}`).then(resp => {
  store.dispatch({
    type: 'REGISTER',
    payload: resp.data
  })
})
}
export function attemptLogin(username, password) {
axios.get(`/api/login?username=${username}&password=${password}`).then(resp => {
if (resp.status === 200) {
  localStorage.setItem("username", username)
  store.dispatch({
    type: 'LOGIN',
    payload: {loginerr: false, authorized: true}
  })
} else {
  store.dispatch({
    type: 'LOGIN',
    payload: {loginerr: true, authorized: false}
  })
}
})
}
export function logoutUser() {
  localStorage.removeItem("username")
  store.dispatch({
    type: 'LOGIN',
    payload: {loginerr: false, authorized: false}
  })
}
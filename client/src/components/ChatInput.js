import React, {useState} from 'react'
import {sendMsg} from '../actions/actions'

export default props => {
    const [message, setMessage] = useState('')

function sendMessage(e) {
    e.preventDefault()
    sendMsg(message,props.channel)
    setMessage('')
}
function checkPress(e) {
    if(e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault()
      sendMessage(e)
      setMessage('')
    }
  }

    return (
        <form id="entry" onSubmit={sendMessage}>
        <textarea type="text" value={message} id="entryInput" placeholder="Enter a message..." onChange={e => setMessage(e.target.value)} onKeyDown={checkPress}></textarea>
        <button type="submit" id="sendButton">Send</button>
    </form>
    )
}
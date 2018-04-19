import React, { Component } from 'react';
import io from 'socket.io-client';
import Chat from '../chat/ChatRoom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const socket = io();

class ChatRoom extends Component {
  constructor() {
    super();
    this.state = {
      chat: ['hello', 'hi there'],
      text: ''
    }

    socket.on('generate response', data => {
      const chat = [...this.state.chat, data]; 
      this.setState({ chat })
    })
  }

  sendMessage = (message, type) => {
    console.log('message', message);
    socket.emit(`${type} message` , message)
    this.setState({ text: '' })
  }

  // handleChange = (text) => {
  //   this.setState({ text })
  // }

  createNew( e ) {
    if( e.which === 13 ) {
      this.setState({text: e.target.value}, () => {
        this.sendMessage(this.state.text, "blast")
      })
      e.target.value = ''
    }
  }

  share = () => {
    let link = {}
    let chat = [...chat, this.props.shared];
    this.setState({ chat });
  }

  render() {
    // check is it obj or text ?
      // if object put it int Link tag
    const chat = this.state.chat.map((el, i) => {
      if (typeof el === 'object') {
        return <Link key={el.id} to={el.link}>Link</Link>
      } else {
        return <li key={el}>{el}</li>
      }
    }) 

    return (
      <div className="chatRoom">
        <ul>
          { chat }
        </ul>
        <input type="text" onKeyPress={(e) => this.createNew(e)}/>
        <button onClick={() => this.share()}> Share </button>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    shared: state.shared
  }
}
export default connect(mapStateToProps)(ChatRoom);
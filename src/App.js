import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Uploader from './api/Uploader'
import {customWebSocket} from './api/CustomWebSocket'

class App extends Component {

  customWebSocket = null;

  constructor(props) {
    super(props);
    this.customWebSocket = customWebSocket;
    console.log(this.customWebSocket);
  }

  uploadFile = (event) => {
  };

  render() {
    return (
        <div>
          <input type="file" id="uploadFileInput" onChange={this.uploadFile}/>
        </div>
    );
  }
}
export default App;

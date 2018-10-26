import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import {customWebSocket} from '../../api/CustomWebSocket'
import imStore from '../../api/store/ImStore'
import ChatBody from "../../api/bean/ChatBody";
import ImUtil from "../../api/util/ImUtil";

class App extends Component {

  constructor(props) {
    super(props);
    imStore.subscribe(this.onMessage);
    customWebSocket.connect();
    let loginReqBody = ImUtil.sendLoginReqPacket("743834110", "2217092039");
    console.log(loginReqBody)
  }

  onMessage = () => {
    let state = imStore.getState();
    console.log(state)
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

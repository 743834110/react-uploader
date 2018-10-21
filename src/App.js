import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Uploader from './components/Uploader'

class App extends Component {

  uploader = null;
  constructor(props) {
    super(props);
      let ip = "localhost";
      let port = "8880";
      this.ws = new WebSocket("wss:"+ip+":"+port+"?username="+"18487545454"+"&password="+"fdfdfdf");
      this.uploader = new Uploader({}, this.ws);
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

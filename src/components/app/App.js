import React, {Component} from 'react';
import logo from '../../logo.svg';
import './App.css';
import {LOCAL, MESSAGE_SCOPE, REMOTE} from "../../api/store/action/actions";
import {system} from "../../api/system/System";
import ImUtil from "../../api/util/ImUtil";
import imStore from "../../api/store/ImStore";

class App extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <input type="file" id="uploadFileInput" onChange={this.uploadFile}/>
            </div>
        );
    }
}

export default App;

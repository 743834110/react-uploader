
import imStore from './store/ImStore'
import {lostConnect, MESSAGE_SCOPE, onMessage} from "./store/action/actions";

/**
 * 代理webSocket对象
 * 以提供事件通知和人性化处理
 */
class CustomWebSocket{

    /**
     * webSocket连接的IP以及端口
     * @type {{protocol: string, ip: string, port: number, userName: string, password: string}}
     * @public
     */
    props = {
        "protocol": "wss",
        "ip": "localhost",
        "port": 8880
    };
    /**
     * webSocket连接的IP以及端口
     * @type WebSocket
     */
    _ws;

    /**
     * 连接打开时间
     * @type Date
     */
    _openTime;



    constructor(props = {}){
        Object.assign(this.props, props);

    }

    /**
     * 与服务器进行连接
     * @public
     */
    connect = () => {
        let {protocol, ip, port} = this.props;
        this._ws = new WebSocket(protocol + ":"+ip+":"+port);
        this._ws.onerror = this._onError;
        this._ws.onopen = this._onOpen;
        this._ws.onmessage = this._onMessage;
        this._ws.onclose = this._onClose;
    };
    /**
     *
     * @param event
     * @private
     */
    _onError = (event) => {

        imStore.dispatch(lostConnect());
    };
    /**
     *
     * @param event
     * @private
     */
    _onOpen = (event) => {
        this._openTime = new Date();
    };
    /**
     * 对服务器返回的消息进行重新组织，然后进行动作分发
     * @param event
     * @private
     */
    _onMessage = (event) => {
        let response = event.data;
        try {
            response = JSON.parse(response);
            imStore.dispatch(onMessage(MESSAGE_SCOPE.REMOTE, response))
        }catch (e) {
            console.log(e)
        }
    };
    /**
     *
     * @param event
     * @private
     */
    _onClose = (event) => {

    };




    /**
     * 保持连接,加以事件通知，
     * 提高可用性
     * @return {boolean} 返回true表示连接正常，否则为连接失效
     */
    keepAlive() {
        if (this._ws.readyState === 1)
            return true;
    }

    /**
     * 发送数据
     * @param data
     */
    send(data) {
        let alive = this.keepAlive();
        if (alive) {
            this._ws.send(data);
        }
    }

    /**
     * 关闭连接
     */
    close() {
        this._ws.close();
    }

}

export const customWebSocket = new CustomWebSocket();



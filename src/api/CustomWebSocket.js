
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
        "port": 8880,
        "userName": "123456789",
        "password": "4546456"
    };
    /**
     * webSocket连接的IP以及端口
     * @type WebSocket
     */
    _ws;

    constructor(props = {"ip": "eee"}){
        Object.assign(this.props, props);
    }

    /**
     * 与服务器进行连接
     * @private
     */
    _connect = () => {
        let {protocol, ip, port, userName, password} = this.props;
        this._ws = new WebSocket(protocol + ":"+ip+":"+port+"?username="+ userName +"&password="+ password);
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
        console.log(this._ws)
    };
    /**
     *
     * @param event
     * @private
     */
    _onOpen = (event) => {
        console.log(event)
    };
    /**
     *
     * @param event
     * @private
     */
    _onMessage = (event) => {

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
        else {
            this._connect();
        }
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
        else {

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



/**
 * Created by Administrator on 2018/10/21.
 * @author litianfeng
 * Created on 2018/10/21
 * The class to encapsulate upload feature
 */
class Uploader {
    /**
     * 文件读取对象
     * @private
     */
    _reader = new FileReader();
    /**
     * 当前已经读取总数
     * @type {number}
     * @private
     */
    _currentLoaded = 0;
    /**
     * 当前读取的文件对象
     * @private
     */
    _file = null;
    /**
     * 当前文件的总字节数
     * @type {number}
     */
    _total = 0;
    /**
     * 上传开始时间
     * @private
     * @type number
     */
    _startTime;
    /**
     *  文件分片数量
     * @type {number}
     */
    _slice = 1;
    /**
     * 当前被发送的文件分片索引
     * @type {number}
     */
    _index = 1;
    /**
     * webSocket句柄
     * @type {WebSocket}
     */
    _webSocket = null;
    /**
     * 属性
     * @type {{step: number, enableRead: boolean, callback: null}}
     */
    props = {
        // 每次读取的文件大小
        "step": 1024 * 256,
        // 标志是否可以读取文件
        "enableRead": true,
        // 回调用函数
        "callback": null
    };


    constructor(props) {
        this.props = Object.assign(this.props, props);
        this.reader.onload = this.onLoad;
    }

    /**
     * 文件读取完成时
     */
    onLoad = (event) => {
        console.log(event);
        console.log("读取总数：" + event.loaded);
        if (this.props.enableRead === false)
            return false;
        this.prepareAndSend(event.loaded);
    };
    /**
     * 读取完成，发送数据
     * @param loaded
     */
    prepareAndSend = (loaded) => {
        // 将分段数据上传到服务器
        var blob = this.reader.result;
        // 使用WebSocket 服务器发送数据
        var message = JSON.stringify({
            "from": "55555",
            "to": "888",
            "cmd": 11,
            "createTime": function () {
                return new Date().getTime();
            },
            "msgType": 6,
            "chatType": 2,
            "content": blob,
            "extras": {
                "file": {

                    "name": this.file.name,
                    "size": this.file.size,
                    "index": this.index,
                    "slice": this.slice,
                    "currentLoading": loaded
                }
            }
        });

        this.webSocket.send(message);
    }
    /**
     * 中止上传
     */
    stopUpload = () => {

    };
    /**
     * 继续上传
     */
    continueUpload = () => {

    };

    /**
     * 上传文件
     * @param file
     */
    uploadFile = (file) => {
        this.file = file;
        this.readBlob();
    };

    /**
     *
     */
    readBlob = () => {
        let blob = this.file.slice(this._currentLoaded, this._currentLoaded + this.props.step);
        this.reader.readAsDataURL(blob);
    }


}




export default Uploader;



/**
 * 服务器相应消息体
 */
export default class RespBody {

    /**
     * 响应状态码
     */
    _code;
    /**
     * 响应信息提示
     */
    _msg;
    /**
     * 响应cmd命令吗
     */
    _command;
    /**
     * 数据
     */
    _data;



    constructor(code, msg, command, data) {
        this._code = code;
        this._msg = msg;
        this._command = command;
        this._data = data;
    }

    get code() {
        return this._code;
    }

    set code(value) {
        this._code = value;
    }

    get msg() {
        return this._msg;
    }

    set msg(value) {
        this._msg = value;
    }

    get command() {
        return this._command;
    }

    set command(value) {
        this._command = value;
    }

    get data() {
        return this._data;
    }

    set data(value) {
        this._data = value;
    }
}
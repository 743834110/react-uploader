
/**
 * 服务器相应消息体
 */
export default class RespBody {

    /**
     * 响应状态码
     */
    code;
    /**
     * 响应信息提示
     */
    msg;
    /**
     * 响应cmd命令吗
     */
    command;
    /**
     * 数据
     */
    data;


    constructor(code, msg, command, data) {
        this.code = code;
        this.msg = msg;
        this.command = command;
        this.data = data;
    }


}
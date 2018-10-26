import Message from "./Message";

/**
 * 登录信息消息体
 * @author litianfeng
 * Created on 2018/10/25
 */
export default class LoginReqBody extends Message{
    /**
     * 用户名
     */
    _userName;
    /**
     * 密码
     */
    _password;
    /**
     * 校验码
     */
    _token;


    constructor(cmd, extras, userName, password, token) {
        super(cmd, extras);
        this._userName = userName;
        this._password = password;
        this._token = token;
    }

    get userName() {
        return this._userName;
    }

    set userName(value) {
        this._userName = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }

    get token() {
        return this._token;
    }

    set token(value) {
        this._token = value;
    }

    toString() {
        return {
            cmd: this.cmd,
            extras: this.extras,
            createTime: this.createTime,
            userName: this.userName,
            password: this.password,
            token: this.token
        }
    }


}
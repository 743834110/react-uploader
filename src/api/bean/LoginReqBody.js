import Message from "./Message";
import {REMOTE} from "../store/action/actions";

/**
 * 登录信息消息体
 * @author litianfeng
 * Created on 2018/10/25
 */
export default class LoginReqBody extends Message{
    /**
     * 用户名
     */
    userName;
    /**
     * 密码
     */
    password;
    /**
     * 校验码
     */
    token;


    constructor(extras, userName, password, token) {
        super(REMOTE.LOGIN, extras);
        this.userName = userName;
        this.password = password;
        this.token = token;
    }


}
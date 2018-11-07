
import LoginReqBody from '../bean/LoginReqBody'
import {encryptPublicLong} from '@lsqswl/rsaencrypt'
import {clientConfig} from "../ClientConfig";
import {system} from "../system/System";
import {LOCAL} from "../store/action/actions";
/**
 * 即时通信数据封装类
 */
export default class ImUtil {
    /**
     * 发送登录请求包
     * @param userName {string}
     * @param password {string}
     * @param isSave {boolean}是否保存用户名和密码到设备中
     * @return {string}
     */
    static sendLoginReqPacketJson(userName, password, isSave = false) {
        // 客户端配置

        if (system.net_status === LOCAL.LOST_CONNECT) {
            throw new Error("网络异常，请重试");
        }
        let extras = {clientConfig: clientConfig};
        userName = encryptPublicLong(userName, system.publicKeyBase64);
        password = encryptPublicLong(password, system.publicKeyBase64);
        let loginReqBody = new LoginReqBody(extras, userName, password, null);
        return JSON.stringify(loginReqBody);
    }


}
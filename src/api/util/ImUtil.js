
import LoginReqBody from '../bean/LoginReqBody'
import {REMOTE} from "../store/action/actions";
/**
 * 即时通信数据封装类
 */
export default class ImUtil {
    /**
     * 发送登录请求包
     * @param userName {string}
     * @param password {string}
     * @param isCrypto {boolean} 当为true时，将进行加密操作
     * @param isSave {boolean}是否保存用户名和密码到设备中
     * @return {LoginReqBody}
     */
    static sendLoginReqPacket(userName, password, isCrypto = true, isSave = false) {
        let loginReqBody = new LoginReqBody(REMOTE.LOGIN, null, userName, password, null);
        return loginReqBody;
    }


}
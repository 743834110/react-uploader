
import imStore from '../store/ImStore'
import {connecting, LOCAL, MESSAGE_SCOPE, REMOTE} from "../store/action/actions";
import {Observer} from "../libs/Observer";
import {customWebSocket} from "../CustomWebSocket";

/**
 * 抽象成一操作系统，任何地方可以读取该操作系统
 * 的一些系统级参数，如网络连接状态等
 */
class System extends Observer{
    /**
     * 网络连接状态
     */
    net_status = LOCAL.LOST_CONNECT;

    /**
     * 服务器公钥
     */
    publicKeyBase64;

    constructor(props) {
        super(props)
        console.log("初始化。。。")
    }


    /**
     * 2. 握手完成，取得服务器发来的公钥并存储起来
     * 将来用于登录信息的加密操作
     *
     * @param state
     */
    observer(state) {
        switch (state.command) {
            case REMOTE.HANDSHAKE_RESP:
                this.publicKeyBase64 = state.data.publicKeyBase64;
                this.net_status = LOCAL.CONNECTING;
                console.log("eeeeeeeeeeeeeeeeeeeeee")
                // 发布与服务器正常连接事件
                imStore.dispatch(connecting());
                break;

            default:

        }
    }

    /**
     * 进行消息的过滤和预处理
     * @param state
     * @return {*}
     */
    updateFilter(state) {

        if (state.type === MESSAGE_SCOPE.REMOTE)
            return state.toDos[0];
    }

    /**
     * 系统初始化
     */
    init = () => {
        customWebSocket.connect();
    };

}

export const system = new System();
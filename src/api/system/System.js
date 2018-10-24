
import imStore from '../store/ImStore'
import {LOCAL, MESSAGE_SCOPE} from "../store/action/actions";

/**
 * 抽象成一操作系统，任何地方可以读取该操作系统
 * 的一些系统级参数，如网络连接状态等
 */
class System {
    /**
     * 网络连接状态
     */
    NET_STATUS = LOCAL.LOST_CONNECT;


    constructor() {

        imStore.subscribe(this._onMessage)
    }

    /**
     *
     * @private
     */
    _onMessage = () => {
        let state = imStore.getState();
        if (state.type === MESSAGE_SCOPE.LOCAL)
            this.NET_STATUS = state.type;

    }
}

export default system = new System();
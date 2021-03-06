/**
 * 以下常量值与服务端中请求字段中的cmd同值
 */

/**
 * 握手信息         1
 * 鉴权信息         3
 * 聊天信息         5
 * 关闭信息         14
 * 获取用户信息     17
 * 获取用户消息     19
 * @type {{HANDSHAKE: number, AUTH: number, LOGIN: number, CHAT: number, CLOSE: number, USER: number, MESSAGE: number}}
 */
export const REMOTE = {
    HANDSHAKE_REQ: 1,
    HANDSHAKE_RESP: 2,
    AUTH_REQ: 3,
    LOGIN_REQ: 5,
    CHAT_REQ: 11,
    CLOSE_REQ: 14,
    USER_REQ: 17,
    MESSAGE_REQ: 19,
    UNKNOWN: 0,
    valueOf: function (code) {
        for (let name in REMOTE) {
            if (REMOTE[name] === code)
                return name;
        }
        return REMOTE.UNKNOWN;
    }
};
/**
 * 表示失去连接状态
 * 表示处于连接状态
 * 表示开始建立连接
 * 用socket中的readyState中的状态标号组成
 * @type {{}}
 */
export const LOCAL = {
    LOST_CONNECT: "023",
    ON_CONNECT: "001",
    CONNECTING: "000",
    valueOf: function (code) {
        for (let name in LOCAL) {
            if (LOCAL[name] === code)
                return name;
        }
    }
};

/**
 * 消息传播范围
 * @type {{LOCAL: string, REMOTE: string}}
 */
export const MESSAGE_SCOPE = {
    LOCAL: "LOCAL",
    REMOTE: "REMOTE",
    valueOf: function (code) {
        for (let name in MESSAGE_SCOPE) {
            if (LOCAL[name] === code)
                return name;
        }
    }
};



/**
 * state可见度
 * @type {{SHOW_ALL: string, SHOW_COMPLETED: string, SHOW_ACTIVE: string}}
 */
export const VISIBILITY_FILTER = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    valueOf: function (code) {
        for (let name in VISIBILITY_FILTER) {
            if (LOCAL[name] === code)
                return name;
        }
    }
};

/**
 * 登录
 * @param text
 * @return {{type: string, text: *}}
 */
export function login(text) {
    return {
        type: REMOTE.LOGIN,
        text
    }
}

/**
 * 失去连接事件
 */
export function lostConnect(text = "") {

    return {
        type: MESSAGE_SCOPE.LOCAL,
        doDos: [
            {
                type: LOCAL.LOST_CONNECT,
                text
            }
        ]
    }
}

/**
 * 网络开始正常运作事件
 * @return {{type: string}}
 */
export function connecting() {

    return {
        type: MESSAGE_SCOPE.LOCAL,
        toDos: [
            {
                type: LOCAL.CONNECTING
            }
        ]
    }
}

/**
 * 消息响应对象组件函数
 * @param messageScope
 * @param response
 * @return {{type: string, toDos: *[], reachTime: Date}}
 */
export function onMessage(messageScope = MESSAGE_SCOPE.LOCAL, response) {

    return {
        type: messageScope,
        toDos: [
            response
        ],
        reachTime: new Date()
    }
}


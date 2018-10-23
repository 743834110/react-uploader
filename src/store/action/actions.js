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
    HANDSHAKE: 1,
    AUTH: 3,
    LOGIN: 5,
    CHAT: 11,
    CLOSE: 14,
    USER: 17,
    MESSAGE: 19
};
/**
 *
 * @type {{}}
 */
export const LOCAL = {

};

/**
 * 消息传播范围
 * @type {{LOCAL: string, REMOTE: string}}
 */
export const MESSAGE_SCOPE = {
    LOCAL: "LOCAL",
    REMOTE: "REMOTE"
};



/**
 * state可见度
 * @type {{SHOW_ALL: string, SHOW_COMPLETED: string, SHOW_ACTIVE: string}}
 */
export const VISIBILITY_FILTER = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
};

/**
 * 登录
 * @param text
 * @return {{type: string, text: *}}
 */
export function login(text) {
    return {
        type: LOGIN,
        text
    }
}
/**
 * 以下常量值与服务端中请求字段中的cmd同值
 */

/**
 * 登录常量
 * @type {string}
 */
export const LOGIN = "5";
/**
 * 握手常量
 * @type {string}
 */
export const HANDSHAKE = "1";
/**
 * 聊天常量
 * @type {string}
 */
export const CHAT = "11";
/**
 * 鉴权常量
 * @type {string}
 */
export const AUTH = "3";
/**
 * 关闭退出常量
 * @type {string}
 */
export const CLOSE = "14";
/**
 * 获取用户信息
 * @type {string}
 */
export const MESSAGE = "19";
/**
 * 获取用户消息
 * @type {string}
 */
export const USER = "17";
/**
 * 消息传播范围
 * @type {{LOCAL: string, REMOTE: string}}
 */
export const messageScope = {
    LOCAL: "LOCAL",
    "REMOTE": "REMOTE"
};



/**
 * state可见度
 * @type {{SHOW_ALL: string, SHOW_COMPLETED: string, SHOW_ACTIVE: string}}
 */
export const visibilityFilter = {
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
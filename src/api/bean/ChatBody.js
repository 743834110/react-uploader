/**
 *
 */
import Message from "./Message";

/**
 * @author litianfeng
 * Created on 2018/10/25
 * 聊天消息体
 */
export default class ChatBody extends Message{
    /**
     * @private
     */
    _from;
    /**
     * @private
     */
    _to;
    /**
     * @private
     */
    _msgType;
    /**
     * @private
     */
    _chatType;
    /**
     * @private
     */
    _content;
    /**
     * @private
     */
    _group_id;


    constructor(cmd, extras, from, to, msgType, chatType, content, group_id) {
        super(cmd, extras);
        this._from = from;
        this._to = to;
        this._msgType = msgType;
        this._chatType = chatType;
        this._content = content;
        this._group_id = group_id;
    }

    get from() {
        return this._from;
    }

    set from(value) {
        this._from = value;
    }

    get to() {
        return this._to;
    }

    set to(value) {
        this._to = value;
    }

    get msgType() {
        return this._msgType;
    }

    set msgType(value) {
        this._msgType = value;
    }

    get chatType() {
        return this._chatType;
    }

    set chatType(value) {
        this._chatType = value;
    }

    get content() {
        return this._content;
    }

    set content(value) {
        this._content = value;
    }

    get group_id() {
        return this._group_id;
    }

    set group_id(value) {
        this._group_id = value;
    }

}
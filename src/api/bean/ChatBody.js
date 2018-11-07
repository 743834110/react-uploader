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
    from;
    /**
     * @private
     */
    to;
    /**
     * @private
     */
    msgType;
    /**
     * @private
     */
    chatType;
    /**
     * @private
     */
    content;
    /**
     * @private
     */
    group_id;


    constructor(cmd, extras, from, to, msgType, chatType, content, group_id) {
        super(cmd, extras);
        this.from = from;
        this.to = to;
        this.msgType = msgType;
        this.chatType = chatType;
        this.content = content;
        this.group_id = group_id;
    }

}
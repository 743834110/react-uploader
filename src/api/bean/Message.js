/**
 *
 */
export default class Message {
    /**
     *
     */
    createTime;
    /**
     *
     */
    id;
    /**
     *
     */
    cmd;
    /**
     *
     */
    extras;


    constructor(cmd, extras) {
        this.createTime = new Date();
        this.cmd = cmd;
        this.extras = extras;
    }



}
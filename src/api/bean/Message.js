/**
 *
 */
export default class Message {
    /**
     * @private
     */
    _createTime;
    /**
     * @private
     */
    _id;
    /**
     * @private
     */
    _cmd;
    /**
     * @private
     */
    _extras;


    constructor(cmd, extras) {
        this._cmd = cmd;
        this._extras = extras;
        this.createTime = new Date().getTime();
    }

    get createTime() {
        return this._createTime;
    }

    set createTime(value) {
        this._createTime = value;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get cmd() {
        return this._cmd;
    }

    set cmd(value) {
        this._cmd = value;
    }

    get extras() {
        return this._extras;
    }

    set extras(value) {
        this._extras = value;
    }

}
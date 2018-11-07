
import imStore from '../store/ImStore'
import {Component} from 'react'

/**
 * redux状态管理观察者类
 * 当有类需要得到该redux的信息通知时可以继承该类并得到信息的通知
 */
export  class Observer{

    /**
     * 订阅者函数
     * @private
     */
    _subscriber;

    /**
     * 构造方法
     * 向store订阅该消息
     */
    constructor() {
        this.subscribeImStore();
        this.updateFilter.bind(this);
        this.observer.bind(this);
    }

    /**
     * 订阅imStore消息通知
     */
    subscribeImStore = () => {
        this._subscriber = imStore.subscribe(this._update)
    };

    /**
     * 取消监听
     */
    unSubscribe = () => {

        this._subscriber();
    };

    /**
     * 消息通知方法
     * @private
     */
    _update = () => {
        let state = imStore.getState();
        state = this.updateFilter(state);
        if (state) {
            this.observer(state);
        }

    };

    /**
     * 子类通过继承该方法以获取消息的通知
     * @abstract
     */
    observer(state) {

    };

    /**
     * 订阅过滤方法
     * 子类可以通过覆盖该方法以过滤不想接受到的信息
     * @abstract
     * @return {boolean}
     */
    updateFilter(state) {
        return state;
    }
}

/**
 * 继承了Component组件的观察者
 * @abstract
 */
export class ObserverMixin extends Component{
    /**
     * 订阅者函数
     * @private
     */
    _subscriber;

    /**
     * 构造方法
     * 向store订阅该消息
     */
    constructor(props) {
        super(props)
        this.subscribeImStore();
        this.updateFilter.bind(this);
        this.observer.bind(this);
    }

    /**
     * 订阅imStore消息通知
     */
    subscribeImStore = () => {
        this._subscriber = imStore.subscribe(this._update)
    };

    /**
     * 取消监听
     */
    unSubscribe = () => {

        this._subscriber();
    };

    /**
     * 消息通知方法
     * @private
     */
    _update = () => {
        let state = imStore.getState();
        state = this.updateFilter(state);
        if (state) {
            this.observer(state);
        }

    };

    /**
     * 子类通过继承该方法以获取消息的通知
     * @abstract
     */
    observer(state) {

    };

    /**
     * 订阅过滤方法
     * 子类可以通过覆盖该方法以过滤不想接受到的信息
     *
     * @return {object}
     */
    updateFilter(state) {
        return state;
    }
}



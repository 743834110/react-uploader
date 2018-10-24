
import {createStore} from 'redux'
import Messenger from './reducer/Messenger'

/**
 * 消息管理状态机
 */
const imStore = createStore(Messenger);

export default imStore;


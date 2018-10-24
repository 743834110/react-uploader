/**
 * Created by litianfeng on 2018/10/21.
 *
 */

import {VISIBILITY_FILTER, MESSAGE_SCOPE} from '../action/actions'

/**
 * 任务类型
 * 选项可见度
 * 任务
 * @type {{type: string, filter: string, toDos: Array}}
 */
const initialState = {
    "type": MESSAGE_SCOPE.LOCAL,
    "filter": VISIBILITY_FILTER.SHOW_ALL,
    "toDos": [

    ]
};

/**
 * reducer函数，控制状态的变化
 * @param state
 * @param action
 */
export default function (state = initialState, action) {

    console.log(action)
    switch (action.type) {

        default:
            return state;
    }
}





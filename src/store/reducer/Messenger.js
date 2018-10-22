/**
 * Created by litianfeng on 2018/10/21.
 *
 */

import {visibilityFilter, messageScope} from '../action/actions'

/**
 * 任务类型
 * 选项可见度
 * 任务
 * @type {{type: string, filter: string, toDos: Array}}
 */
const initialState = {
    "type": messageScope.LOCAL,
    "filter": visibilityFilter.SHOW_ALL,
    "toDos": [

    ]
};

/**
 *
 * @param state
 * @param action
 */
export default function (state = initialState, action) {

}





import _ from "lodash";

/**
 * 分析后台返回的数据
 * 在里面做一些公用的处理逻辑
 * 1、将业务数据和后台处理结果信息分离出来
 * @return {[type]} [description]
 */
export function analyzeResponseData(responseData) {
    if (_.isEmpty(responseData)) {
        return false;
    }

    if (responseData.errno !== 0) {
        return false;
    }

    return {
        data: responseData.data,
        result: {
            errno: responseData.errno,
            errmsg: responseData.errmsg
        }
    }
}
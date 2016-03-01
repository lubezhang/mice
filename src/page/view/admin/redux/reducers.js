import { combineReducers } from "redux";

import { ACTION_TYPE } from "../common/constants";
import article from './reducer-article';

function actionType(article = {}, action = {}){
    return action.type
}

export default combineReducers({
    ...article,
    actionType
});

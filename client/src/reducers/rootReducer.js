import {combineReducers} from "redux";
import vazhippadReducer from './vazhippad.js';
import userVazhippadReducer from './userVazhippad.js';
import familyInfoReducer from './familyInfo.js';
import userReducer from "./userSaga";
const rootReducer = combineReducers({
    vazhippadReducer : vazhippadReducer,
    userVazhippadReducer : userVazhippadReducer,
    familyInfoReducer : familyInfoReducer,
    userReducer : userReducer
});

export default rootReducer;
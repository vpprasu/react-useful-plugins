import { call, put } from 'redux-saga/effects'
import {getUser} from '../requests/user'
import * as Types from "../../actions/types";
import { setUser } from '../../actions/userSaga'
export function* setUserHandler(action){
    try{
        const result = yield call(getUser);
        const {data} = result;
        yield put(setUser(data))
    }
    catch(e){
        console.log(e)
    }
}
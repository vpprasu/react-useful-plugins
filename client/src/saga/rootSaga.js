import { takeEvery } from 'redux-saga/effects'
import * as Types from "../actions/types"
import {setUserHandler} from "./handlers/user"
export function* watcherSaga(){
    yield takeEvery(Types.GET_USER, setUserHandler)
}
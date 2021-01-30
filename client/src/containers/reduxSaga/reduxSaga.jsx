import React,{ useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getUser} from "../../actions/userSaga";
export default function ReduxSaga() {
    const userInfo = useSelector(state => state.userReducer.user)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUser())
        return () => {
        }
    }, [useDispatch])
    return (
        <div>
            {JSON.stringify(userInfo)}
        </div>
    )
}

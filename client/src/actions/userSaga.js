import * as Types from './types';

export const getUser = () => ({
    type : Types.GET_USER
})

export const setUser = (data) => ({
    type : Types.SET_USER,
    payload : data.result
})
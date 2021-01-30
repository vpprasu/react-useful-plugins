import {LIST_USER_VAZHIPPAD} from "./types.js";
import axiosInstance from "../axiosConfig";
export const listUserVazhippad =  () => async dispatch => {
    try{
        let response = await axiosInstance.get("user-vazhippad/list");
        dispatch({type : LIST_USER_VAZHIPPAD, payload : response.data.result})
    }
    catch(e){
        console.log(e);
    }
}
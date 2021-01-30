import {LIST_VAZHIPPAD} from "./types.js";
import axiosInstance from "../axiosConfig";

export const listVazhippad =  () => async dispatch => {
    try{
        const response = await axiosInstance.get("vazhippad/list");
        dispatch({type : LIST_VAZHIPPAD, payload : response.data.result})
    }
    catch(e){
        console.log(e);
    }
}
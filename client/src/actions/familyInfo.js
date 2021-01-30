import {LIST_FAMILYINFO} from "./types.js";
import axiosInstance from "../axiosConfig";

export const listFamilyInfo =  () => async dispatch => {
    try{
        const response = await axiosInstance.get("family-info/list");
        dispatch({type : LIST_FAMILYINFO, payload : response.data.result})
    }
    catch(e){
        console.log(e);
    }
}
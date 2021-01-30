import axiosInstance from "../../axiosConfig";

export function getUser(action){
    return axiosInstance.get('user-vazhippad/list');
}
import { BASE_URL } from "./baseUrl";
import { commonAPI } from "./commonAPI";

//register and login 

export const registerAPI = async(userdetail)=>{
    return await commonAPI("POST",`${BASE_URL}/user/register`,userdetail,'')
}


export const loginAPI = async(logindata) =>{
    return await commonAPI("POST",`${BASE_URL}/user/login`,logindata,'')
}



//add grievance 

export const addGrievanceAPI = async(data,reqHeader) =>{
    return await commonAPI("POST",`${BASE_URL}/user/addGrievance`,data,reqHeader)
}
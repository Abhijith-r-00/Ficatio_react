import axios from "axios";
import baseUrl from "./baseUrl";
const commonApi= async(method,endPoint,requestBody)=>{
    const requestConfig={
        method:method,
        url:baseUrl+endPoint,
        data:requestBody
    }
    // console.log(requestConfig);
    
    return await axios(requestConfig).then((res)=>{
        return res;
    }).catch((error)=>{
        return error;
    })
}

export default commonApi
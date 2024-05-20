//1. import axios
import axios from 'axios'

//2. export commonAPI
export const commonAPI = async(httpRequest, url, reqBody, reqHeader) => {
    const reqConfig = {
        method:httpRequest,
        url,
        data:reqBody,
        headers:reqHeader?reqHeader:{"Content-Type":"application/json"}
    }
    return await axios(reqConfig).then((result)=>{
        return result;
    })
    .catch((err)=>{
        return err;
    })
}




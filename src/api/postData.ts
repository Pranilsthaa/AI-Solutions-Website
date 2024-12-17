import axios from "axios";

const postData = async(route: string, data?: any) => {
    const base_api_url = import.meta.env.VITE_API_KEY;
    
    const response = await axios.post(base_api_url + route, data,);
    return response;
}

export default postData;
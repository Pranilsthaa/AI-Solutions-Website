import axios from "axios";

const postAuthData = async(route: string, data?: any) => {
    const tokenData = localStorage.getItem("token");
    const parsedToken = tokenData && JSON.parse(tokenData);
    const base_api_url = import.meta.env.VITE_API_KEY;
    
    const response = await axios.post(base_api_url + route, data, {
        headers: {
            Authorization: parsedToken ? parsedToken.token : null,
        }
    });
    return response;
}

export default postAuthData;    
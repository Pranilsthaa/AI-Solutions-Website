import axios from "axios";

const getAuthData = async(route: string, params?: any) => {
    const tokenData = localStorage.getItem("token");
    const parsedToken = tokenData && JSON.parse(tokenData);
    const base_api_url = import.meta.env.VITE_API_KEY;
    const response = await axios.get(base_api_url + route, {
        headers: {
            Authorization: parsedToken ? parsedToken.token : null,
        },
        params: params || null,
    });
    return response;
}

export default getAuthData;
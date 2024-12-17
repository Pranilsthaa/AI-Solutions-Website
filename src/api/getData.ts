import axios from "axios";

const getData = async(route: string, params?: any) => {
    const base_api_url = import.meta.env.VITE_API_KEY;
    const response = await axios.get(base_api_url + route, {
        params: params || null,
    });
    return response;
}

export default getData;
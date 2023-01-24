import axios from "axios"
import baseConfig from "../configs/baseConfig";

const serverUrl = baseConfig.serverUrl;

export const fetchMenuItems = async () => {
    try {
        const response = await axios.get(`${serverUrl}/item/list`);
        return response.data;

    } catch (error) {
        console.log(error)
    }
}
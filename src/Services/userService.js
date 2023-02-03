import axios from "axios";
import baseConfig from "../configs/baseConfig";
const serverUrl = baseConfig.serverUrl;

export const getUsers = async ({ page, limit }) => {
    try {
        page = page || 0;
        limit = limit || 10;
        const response = await axios.get(
            `${serverUrl}/admin/users?page=${page}&limit=${limit}`,
            {
                withCredentials: true,
            }
        );
        return response.data;
    } catch (error) {
        return error;
    }
};

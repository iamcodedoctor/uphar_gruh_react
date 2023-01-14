import axios from "axios"

const serverUrl = "http://localhost:3010/api/v1"

export const fetchMenuItems = async () => {
    try {
        const response = await axios.get(`${serverUrl}/item/list`);
        return response.data;

    } catch (error) {
        console.log(error)
    }
}
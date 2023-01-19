import axios from "axios";

const serverUrl = "http://localhost:3010/api/v1";

const fetchUser = async () => {
    try {
        const response = await axios.get(`${serverUrl}/me`, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        return error;
    }
};

export {fetchUser}

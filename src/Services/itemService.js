import axios from "axios";
import baseConfig from "../configs/baseConfig";

const serverUrl = baseConfig.serverUrl;

export const fetchMenuItems = async () => {
    try {
        const response = await axios.get(`${serverUrl}/item/list`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const createMenuItems = async (formData) => {
    try {
        const response = await axios.post(
            `${serverUrl}/item/create`,
            formData,
            {
                withCredentials: true,
            }
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getItemById = async (id) => {
    try {
        const response = await axios.get(`${serverUrl}/item/${id}`, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const updateItem = async ({ id, formData }) => {
    try {
        const response = await axios.put(`${serverUrl}/item/${id}`, formData, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const deleteItem = async (id) => {
    try {
        const response = await axios.delete(`${serverUrl}/item/${id}`, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

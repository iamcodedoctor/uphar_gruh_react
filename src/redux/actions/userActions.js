import axios from 'axios'
import {serverUrl} from "../store"

export const laodUser = () => async (dispatch) => {
    try {
        dispatch({
            type: "loadUserRequest",
        })

        const {data} = await axios.get(`${serverUrl}/me`, {
            withCredentials: true,
        })

        dispatch({
            type:'loadUserSuccess',
            payload: data.user
        })
    } catch (error) {
        dispatch({
            type:'loadUserFailure',
            payload: error.response.data.message
        })
    }
}

export const logOutUser = () => async (dispatch) => {
    try {
        dispatch({
            type: "logOutUserRequest"
        })

        await axios.get(`${serverUrl}/logout`, {
            withCredentials: true
        })
        dispatch({
            type: "logOutUserSuccess"
        })
    } catch (error) {
        dispatch({
            type: 'logOutUserFailure'
        })
    }
}
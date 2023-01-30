import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import baseConfig from "../configs/baseConfig";

const serverUrl = baseConfig.serverUrl;
const stripePromise = loadStripe(
    baseConfig.stripePublicKey
);

export const createOredr = async (data) => {
    try {
        let {houseNumber,city, country, state, pinCode, phoneNumber, paymentMethod, dishes} = data;
        pinCode = parseInt(pinCode);
        phoneNumber = parseInt(phoneNumber);
        if(paymentMethod === "COD") {

            const response = await axios.post(`${serverUrl}/order/create`, {
                shippingInfo : {
                    houseNo: houseNumber,
                    city,
                    country,
                    state,
                    pinCode,
                    phoneNo: phoneNumber
                },
                dishes,
                paymentMethod
            },  { withCredentials: true })
            return response.data;
        } else {
            const stripe = await stripePromise;
            const response = await axios.post(`${serverUrl}/order/create`, {
                shippingInfo : {
                    houseNo: houseNumber,
                    city,
                    country,
                    state,
                    pinCode,
                    phoneNo: phoneNumber
                },
                dishes,
                paymentMethod
            },  { withCredentials: true })
            await stripe.redirectToCheckout({
                sessionId: response.data.data.stripeSession.id,
            });
        }
    } catch (error) {
        return error;
    }
}

export const getMyOrders = async () => {
    try {
        const response = await axios.get(`${serverUrl}/order/myOrders`, {withCredentials: true});
        return response.data;
    } catch (error) {
        return error;
    }
}

export const getOrderDetails = async (id) => {
    try {
        const response = await axios.get(`${serverUrl}/order/${id}`, {withCredentials: true});
        return response.data;
    } catch (error) {
        return error;
    }
}
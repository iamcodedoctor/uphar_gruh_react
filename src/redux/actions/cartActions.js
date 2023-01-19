import { useSelector } from "react-redux";

export const addToCart = (item) => (dispatch) => {
    const { dishes } = useSelector((state) => state.cart);
    const dish = dishes.find((dish) => dish._id === item._id);
    if (dish) {
        dish.quantity += 1;
    } else {
        dispatch({
            type: "addItemToCart",
            payload: { ...item, quantity: 1 },
        });
    }
};

export const removeItemFromCart =
    ({ dishes, id }) =>
    (dispatch) => {
        const newDishes = dishes.filter((dish) => dish._id !== id);
        dispatch({
            type: "removeItemFromCart",
            payload: newDishes,
        });
    };

export const resetCart = () => (dispatch) => {
    dispatch({
        type: "resetCart",
    });
};


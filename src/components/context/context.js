import React, { useContext, useEffect, useReducer} from "react";
import { reducer } from "./reducer";
import { PRODUCTS } from "../../FakeProduct/fakeProduct";

const AppContext = React.createContext();
AppContext.displayName = "AppGlobalContext";

const initialState = {
    products: [],
    cartItems: [],
    totalCost: 0,
    quantity: 0,
    isLoading: false,
    error: null,
};

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCartHandler = (id) => {
        if (state.cartItems.find((item) => item.id === id)) {
            return;
        } else {
            const newItem = state.products.filter((item) => item.id === id);
            dispatch({ type: "ADD_TO_CART", payload: newItem });
        }
    };

    const removeFromCartHandler = (id) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: id });
    };

    const quantityIncreaseHandler = (id) => {
        dispatch({ type: "QUANTITY_INCREASE", payload: id });
    };

    const quantityDecreaseHandler = (id) => {
        dispatch({ type: "QUANTITY_DECREASE", payload: id });
    };

    useEffect(() => {
        dispatch({ type: "RETRIVE_DATA", payload: PRODUCTS });
    }, []);

    useEffect(() => {
        dispatch({ type: "GET_TOTALS" });
    }, [state.cartItems]);

    // RETURN
    return (
        <AppContext.Provider
            value={{
                ...state,
                addToCartHandler,
                removeFromCartHandler,
                quantityIncreaseHandler,
                quantityDecreaseHandler,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

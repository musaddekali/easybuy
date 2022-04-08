export const reducer = (state, action) => {
    switch (action.type) {
        case 'RETRIVE_DATA':
            return {
                ...state,
                products: action.payload
            }

        case 'ADD_TO_CART':
            return {
                ...state,
                cartItems: [...state.cartItems, ...action.payload],
            }

        case 'QUANTITY_INCREASE':
            const itemQntInc = state.cartItems.map(item => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item;
            })

            return {
                ...state,
                cartItems: itemQntInc,
            }

        case 'QUANTITY_DECREASE':
            const itemQntDec = state.cartItems.map(item => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity - 1 }
                }
                return item;
            }).filter(item => item.quantity !== 0);

            return {
                ...state,
                cartItems: itemQntDec,
            }

        case 'GET_TOTALS':
            let { quantity, totalCost } = state.cartItems.reduce((cartTotal, cartItem) => {
                const { quantity, price } = cartItem;
                const itemTotal = quantity * price;

                cartTotal.totalCost += itemTotal;
                cartTotal.quantity += quantity;
                return cartTotal;
            }, { quantity: 0, totalCost: 0 });
            totalCost = totalCost.toFixed(2);
            return {
                ...state,
                quantity,
                totalCost,
            }

        case 'REMOVE_FROM_CART':
            const existItem = state.cartItems.filter(item => item.id !== action.payload);
            return {
                ...state,
                cartItems: existItem,
            }

        default:
            return state;
    }
}
const initialState = {
    shoppingCart: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'Add_To_Cart': {
            return {
                ...state,
                shoppingCart: [
                    ...state.shoppingCart,
                    action.payload,
                ]
            }
        }
        case 'Remove_From_Cart': {
            return {
                ...state,
                shoppingCart: state.shoppingCart.filter(item => item !== action.payload)
            }
        }
        case 'Increase_Counter': {
            return {
                ...state,
                shoppingCart: [
                    ...state.shoppingCart,
                    action.payload,
                ]
            }
        }
        case 'Decrease_Counter': {
            return {
                ...state,
                shoppingCart: [
                    ...state.shoppingCart,
                    action.payload,
                ]
            }
        }
        default:
            return state;
    }
}
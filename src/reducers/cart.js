const initialState = {
    shoppingCart: [],
    Modal: false,
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
                shoppingCart: state.shoppingCart.forEach(item => {
                    if (item === action.payload) {
                        item.counter = item.counter + 1
                    }
                })

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
        case 'Show_Modal': {
            return {
                ...state,
                Modal: true
            }
        }
        case 'Hide_Modal': {
            return {
                ...state,
                Modal: false
            }
        }
        default:
            return state;
    }
}
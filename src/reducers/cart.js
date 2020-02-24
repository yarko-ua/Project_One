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
                    action.payload
                ]
            }
        }
        default:
            return state;
    }
}
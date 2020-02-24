const initialState = {
    price: '',
    gender: '',
    brand: [],
    size: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'Filter_Price': {
            return {
                ...state,
                price: action.payload // ???
            };
        }
        case 'Filter_Gender': {
            return {
                ...state,
                gender: action.payload // ???
            }
        }
        case 'Filter_Brand': {
            return {
                ...state,
                brand: [
                    ...state.brand,
                    action.payload
                ] // ???
            }
        }
        case 'Filter_Size': {
            return {
                ...state,
                size: [
                    ...state.size,
                    action.payload
                ]// ???
            }
        }
        default:
            return state;
    }
}
// export default FilterSize = (category) => {
//     let filtered = category;
//     if (this.state.size.length !== 0) {
//         return filtered.filter(item => item.size.includes(this.state.size[0]));
//     }
//     return filtered;
// }
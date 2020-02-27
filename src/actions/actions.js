export const FilterPrice = content => ({
    type: 'Filter_Price',
    payload: content
})
export const FilterGender = content => ({
    type: 'Filter_Gender',
    payload: content
})
export const FilterBrand = content => ({
    type: 'Filter_Brand',
    payload: content
})
export const FilterSize = content => ({
    type: 'Filter_Size',
    payload: content

})
export const AddToCart = content => ({
    type: 'Add_To_Cart',
    payload: content
})
export const RemoveFromCart = content => ({
    type: 'Remove_From_Cart',
    payload: content
})
export const ResetFilter = () => ({
    type: 'Reset_Filter',
})

export const Increase = content => ({
    type: 'Increase_Counter',
    payload: content
})
export const Decrease = content => ({
    type: 'Decrease_Counter',
    payload: content

})
export const Search = content => ({
    type: 'Search',
    payload: content
})
export const ShowModal = () => ({
    type: "Show_Modal",
})
export const HideModal = () => ({
    type: "Hide_Modal",
})
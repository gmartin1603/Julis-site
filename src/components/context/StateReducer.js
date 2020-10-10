export const initialState = {
    cart: [],
    user: null,
    isAdmin: false,
    products: null,
}



export const getCartTotal = (cart) => {
    return (
        cart?.reduce((amount, item) => item.price + amount, 0)
    )
}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item]
            }

        case 'SET_USER':
            return {
                ...state,
                user: action.user,
                isAdmin: action.admin,
            }

        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.products
            }

        default:
            return state
    }
}

export default reducer
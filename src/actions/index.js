import * as types from '../constants/ActionType';

export const listAllProduct = (products) => {
    return {
        type: types.ALL_LIST_PRODUCT,
        products
    }
}

export const handleDetail = (product) => {
    return {
        type: types.HANDLE_DETAIL,
        product
    }
}

export const addToCart = (product) => {
    return {
        type: types.ADD_TO_CART,
        product
    }
}

export const increment = (product) => {
    return {
        type: types.INCREMENT,
        product
    }
}

export const decrement = (product) => {
    return {
        type: types.DECREMENT,
        product
    }
}

export const removeItem = product => {
    return {
        type: types.REMOVE_ITEM,
        product
    }
}

export const clearCart = () => {
    return {
        type: types.CLEAR_CART
    }
}

export const addTotal = (cart) => {
    return {
        type: types.ADD_TOTAL,
        cart
    }
}
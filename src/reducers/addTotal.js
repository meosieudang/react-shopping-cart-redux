import * as types from '../constants/ActionType'

let initialState = {
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
}

let myReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case types.ADD_TOTAL:
            console.log(action.cart)
            let subTotal = 0;
            action.cart.map(item => subTotal += item.total);
            const tempTax = subTotal * 0.1;
            const tax = parseFloat(tempTax.toFixed(2));
            const total = subTotal + tax;
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            };

        default:
            return { ...state };
    }
}

export default myReducer;
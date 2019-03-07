import * as types from '../constants/ActionType';

let initialState = {};

const myReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.HANDLE_DETAIL:
            return { ...action.product };

        case types.ADD_TO_CART:
            action.product.inCart = true;
            return { ...action.product };
        default:
            return { ...state };
    }
}

export default myReducer;
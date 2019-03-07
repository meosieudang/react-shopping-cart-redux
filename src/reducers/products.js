import * as types from '../constants/ActionType';
import { storeProducts } from '../data';


let initialState = [];
let data = storeProducts;
let myReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.ALL_LIST_PRODUCT:
            let tempProducts = [];
            data.forEach(item => {
                const singleItem = { ...item };
                tempProducts = [...tempProducts, singleItem];

            });
            state = [...tempProducts];
            return [...state];

        default:
            return [...state];
    }
};

export default myReducer;
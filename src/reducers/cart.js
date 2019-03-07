import * as types from '../constants/ActionType'
import { storeProducts } from '../data'

let initialState = [];
let products = storeProducts;

const getItem = id => {
    const product = products.find(item => item.id === id);
    return product;
}

let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            let tempProducts = [...products];
            const index = tempProducts.indexOf(getItem(action.product.id));
            const product = tempProducts[index];

            product.inCart = true;
            product.count = 1;
            const price = product.price;
            product.total = price;
            
            return [...state, product];

        case types.INCREMENT:
            let tempCart = [...state];
            const selectedProduct = tempCart.find(item => item.id === action.product);
            const indexIncrement = tempCart.indexOf(selectedProduct);
            const productIncrement = tempCart[indexIncrement];

            productIncrement.count = productIncrement.count + 1;
            productIncrement.total = productIncrement.count * productIncrement.price;

            return [...tempCart];

        case types.DECREMENT:
            let tempCartDecrement = [...state];
            const selectedProductDecrement = tempCartDecrement.find(item => item.id === action.product);
            const indexDecrement = tempCartDecrement.indexOf(selectedProductDecrement);
            const productDecrement = tempCartDecrement[indexDecrement];

            productDecrement.count = productDecrement.count - 1;
            if (productDecrement.count === 0) {

                tempCartDecrement.splice(indexDecrement, 1);
                productDecrement.inCart = false;
                productDecrement.count = 0;
                productDecrement.total = 0;

            } else {
                productDecrement.total = productDecrement.count * productDecrement.price;
            }
            return [...tempCartDecrement];

        case types.REMOVE_ITEM:
            let tempProductsRemove = [...products];
            let tempCartRemove = [...state];
            tempCartRemove = tempCartRemove.filter(item => item.id !== action.product.id);
            const indexRemove = tempProductsRemove.indexOf(getItem(action.product.id));

            let removeProduct = tempProductsRemove[indexRemove];
            removeProduct.inCart = false;
            removeProduct.count = 0;
            removeProduct.total = 0;
            return [...tempCartRemove];

        case types.CLEAR_CART:
            state = [];
            let tempClear = [...products];
            for(let item of tempClear){
                item.inCart = false;
                item.count = 0;
                item.total = 0;
            }
            return [...state];

        default:
            return [...state];
    }
}

export default myReducer;
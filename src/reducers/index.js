import {combineReducers} from 'redux';
import products from './products';
import detailProduct from './detailProduct';
import cart from './cart';
import addTotal from './addTotal';

const myReducer = combineReducers ({
    products,
    detailProduct,
    cart,
    addTotal
});

export default myReducer;
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import ProductList from '../components/ProductList';
import Product from '../components/Product';

class ProductContainer extends Component {

    componentDidMount() {
        this.props.listAllProduct();
    }

    render() {
        const { products } = this.props
        return (
            <Fragment>
                <ProductList>
                    {this.showListProducts(products)}
                </ProductList>
            </Fragment>
        );
    }

    showListProducts = (products) => {
        let result = null;
        if (products.length > 0) {
            result = products.map(product => {
                return (
                    <Product key={product.id}
                        product={product}
                        handleDetail={this.props.handleDetail}
                        addToCart={this.props.addToCart}
                        addTotal={this.props.addTotal}
                    />
                );
            })
        }
        return result;
    }

}

const mapStateToProps = state => {
    return {
        products: state.products,
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        listAllProduct: product => {
            dispatch(actions.listAllProduct(product))
        },
        handleDetail: (product) => {
            dispatch(actions.handleDetail(product))
        },
        addToCart: (product) => {
            dispatch(actions.addToCart(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
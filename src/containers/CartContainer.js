import React, { Component, Fragment } from 'react';
import Title from '../components/Title';
import CartColumns from '../components/Cart/CartColumns';
import CartList from '../components/Cart/CartList';
import CartTotal from '../components/Cart/CartTotal';
import EmptyCart from '../components/Cart/EmptyCart';
import { connect } from 'react-redux'
import * as actions from '../actions/index'


class CartContainer extends Component {

    render() {
        const { cart } = this.props;
        return (
            <section>
                {this.showCart(cart)}
                
            </section>
        );
    }

    showCart = (cart) => {
        if (cart.length > 0) {
            return (
                <Fragment>
                    <Title name='your' title='cart' />
                    <CartColumns />
                    <CartList cart={cart}
                        increment={this.props.increment}
                        decrement={this.props.decrement}
                        removeItem={this.props.removeItem}
                    />
                    <CartTotal clearCart={this.props.clearCart}
                               cart={this.props.cart}
                    />
                </Fragment>
            );
        }
        else {
            return <EmptyCart />
        }
    }

}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        increment: (product) => {
            dispatch(actions.increment(product))
        },
        decrement: (product) => {
            dispatch(actions.decrement(product))
        },
        removeItem: product => {
            dispatch(actions.removeItem(product))
        },
        clearCart: () => {
            dispatch(actions.clearCart())
        },
        addTotal: (cart) => {
            dispatch(actions.addTotal(cart))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
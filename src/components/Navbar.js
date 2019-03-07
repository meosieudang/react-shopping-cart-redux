import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import { connect } from 'react-redux';

class Navbar extends Component {
    render() {
        const { cart } = this.props;

        let showQuantity = 0;
        cart.map(item => showQuantity+= item.count);
        return (
            <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
                <Link to='/'>
                    <h1 className='navbar-brand'>HOME</h1>
                </Link>
                <ul className='navbar-nav align-items-center'>
                    <li className='nav-item ml-5'>
                        <Link to='/' className='nav-link'>
                            products
                        </Link>
                    </li>
                </ul>
                <Link to='/cart' className='ml-auto'>
                    <ButtonContainer>
                        <span className='mr-2'>
                            <i className='fa fa-cart-plus' />
                            <span className='badge badge-light '>{showQuantity}</span>
                        </span>
                        my cart
                </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize !important;
    }
`
export default connect(mapStateToProps, null)(Navbar);
import React, { Component } from 'react';
import '../App.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

class Product extends Component {
    state = {
        open: false,
    };

    handleClick = () => {
        this.props.addToCart(this.props.product);
        this.setState({ open: true });
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ open: false });
    };

    render() {
        const { product, handleDetail } = this.props;
        return (
            <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
                <div className='card'>

                    <div className='img-container p-5'>
                        <Link to='/detail'>
                            <img src={product.img} alt='product' className='card-img-top'
                                onClick={() => handleDetail(product)} />
                        </Link>
                        <button className='cart-btn'
                            disabled={product.inCart ? true : false}
                            onClick={this.handleClick}
                        >
                            {product.inCart ? (<p className='text-capitalize mb-0' disabled>
                                {' '}
                                in Cart</p>) : (<i className='fa fa-cart-plus' />)}
                        </button>
                        <Snackbar
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            open={this.state.open}
                            autoHideDuration={2000}
                            onClose={this.handleClose}
                            ContentProps={{
                                'aria-describedby': 'message-id',
                            }}
                            message={<span id="message-id"><CheckCircleIcon />  Add {`${product.title}`} To Cart Success !!</span>}
                            action={[
                                <IconButton
                                    key="close"
                                    aria-label="Close"
                                    color="inherit"
                                    onClick={this.handleClose}
                                >
                                    <CloseIcon />
                                </IconButton>,
                            ]}
                        />
                    </div>


                    <div className='card-footer d-flex justify-content-between'>
                        <p className='align-items-center mb-0'>
                            {product.title}
                        </p>
                        <h5 className='text-blue font-italic mb-0'>
                            <span className='mr-1'>
                                ${product.price}
                            </span>
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        );
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool,

    }).isRequired
};

const ProductWrapper = styled.div`
.card{
    border-color: transparent;
    transition: all 0.5s linear;
}
.card-footer{
    background: transparent;
    border-top: transparent;
    transition: all 0.5s;
}
&:hover{
    .card{
        border: 0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background: rgba(247,247,247);
    }
}
.img-container{
    position: relative;
    overflow:hidden;
}
.card-img-top{
    transition: all 0.5s;
}
.img-container:hover .card-img-top{
    transform:scale(1.2);
}
.cart-btn{
    position: absolute;
    bottom: 0;
    right: 0;
    padding: .2rem .4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5 0 0 0;
    transform:translate(100%,100%);
    transition: all 0.5s;
}
.img-container:hover .cart-btn{
    transform: translate(0,0);
}
.cart-btn:hover{
    color: var(--mainBlue);
    cursor: pointer;
}
`

export default Product;
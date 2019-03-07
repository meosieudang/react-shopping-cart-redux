import React, { Component } from 'react';
// import {ProductConsumer} from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
class Detail extends Component {
    render() {
        let { detailProduct, addToCart } = this.props;
        return (
             <div className='container py-5'>
                <div className='row'>
                    <div className='col-10 mx-auto text-center text-slanted
                    text-blue my-5'>
                        <h1>{detailProduct.title}</h1>
                    </div>
                </div>

                <div className='row'>
                <div className='col-10 mx-auto col-md-6 my-3
                 text-capitalize'>
                    <img src={detailProduct.img} className='img-fluid' alt='product'/>
                 </div>

                 <div className='col-10 mx-auto col-md-6 my-3
                 text-capitalize'>
                    <h2>model: {detailProduct.title}</h2>
                    <h4 className='text-title text-uppercase
                    text-muted mt-3 mb-2'
                    >
                    made by: 
                    <span className='text-uppercase'>
                        {detailProduct.company}
                    </span>
                    </h4>
                    <h4 className='text-blue'>
                        <strong>
                            price: <span>$</span>
                            {detailProduct.price}
                        </strong>
                    </h4>
                    <p className='text-capitalize font-weight-bold
                    mt-3 mb-0'
                    >
                    some info about product
                    </p>
                    <p className='text-muted lead'>{detailProduct.info}</p>
                    {/* button */}
                    <div>
                        <Link to='/'>
                        <ButtonContainer>
                            back to products
                        </ButtonContainer>
                        </Link>
                        <ButtonContainer
                            cart
                            disabled={detailProduct.inCart?true:false}
                            // onClick={()=> {addToCart(detailProduct.id);
                            //     // value.openModal(id);
                            // }}
                            onClick= {()=> {addToCart(detailProduct)}}
                        >
                            {detailProduct.inCart?'inCart':'add to cart'}
                        </ButtonContainer>
                    </div>
                 </div>
                </div>
             </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        detailProduct: state.detailProduct
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        addToCart: (product) => {
            dispatch(actions.addToCart(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
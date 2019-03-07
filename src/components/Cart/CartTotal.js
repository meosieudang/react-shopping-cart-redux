import React, { Fragment } from 'react'
import {Link} from 'react-router-dom';
// import Paypal from './Paypal';
export default function CartTotal(props) {
    
    let cartSubTotal = 0;
    props.cart.map(item => cartSubTotal+= item.total);
    const tax = parseFloat((cartSubTotal * 0.1).toFixed(2));
    
    return (
        <Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8
                    text-capitalize text-right'>
                    <Link to='/'>
                    <button className='btn btn-outline-danger text-uppercase mb-3 px-5' 
                            type='button'
                            onClick={()=>props.clearCart()}
                            >
                    clear Cart
                    </button>
                    </Link>
                    <h5>
                        <span className='text-title'>
                        subtotal: 
                        </span>
                        <strong>$ {cartSubTotal}</strong>
                    </h5>
                    <h5>
                        <span className='text-title'>
                        tax: 
                        </span>
                        <strong>$ {tax}</strong>
                    </h5>
                    <h5>
                        <span className='text-title'>
                        total: 
                        </span>
                        <strong>$ {cartSubTotal + tax}</strong>
                    </h5>
                    {/* <Paypal     total={cartTotal} 
                                  clearCart={clearCart}
                                  history={history}/> */}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

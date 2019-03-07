import React, { Component, Fragment } from 'react';
import Title from './Title';
class ProductList extends Component {
    render() {
        return (
            <Fragment>
                <div className='py-5'>
                    <div className='container'>
                        <Title name='our' title='products' />
                        <div className='row'>
                           {this.props.children}
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

    
}


export default ProductList;
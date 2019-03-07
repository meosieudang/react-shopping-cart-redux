import React, { Component } from 'react';

class Default extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-10 mx-auto text-center text-title
                    text-uppercase pt-5'>
                    <h1 className='display-3'>
                        404
                    </h1>
                    <h1 className='display-3'>Not Found</h1>
                    URL<span>{this.props.location.pathname}</span>
                    {' '} was not found
                    </div>
                </div>
            </div>
        );
    }
}

export default Default;
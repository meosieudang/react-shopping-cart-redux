import React, { Component, Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Detail from './components/Detail';
import Default from './components/Default';
import Modal from './components/Modal';
import ProductContainer from './containers/ProductContainer';
import CartContainer from './containers/CartContainer';
class App extends Component {
  render() {
    return (
     <Fragment>
       <Navbar/>
       <Switch>
         <Route exact path='/' component={ProductContainer} />
         <Route path='/detail' component={Detail} />
         <Route path='/cart' component={CartContainer} />
         <Route component={Default} />
       </Switch>
       <Modal />
     </Fragment>
    );
  }
}

export default App;

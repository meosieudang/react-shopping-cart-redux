import React from 'react'
import CartItem from './CartItem';
export default function CartList(props) {
    const {cart, increment, decrement, removeItem} = props;
  return (
    <div className='container-fluid'>
      {cart.map(item=>{
          return <CartItem key={item.id} item={item} 
                           increment={increment} 
                           decrement={decrement}
                           removeItem={removeItem}
                  />
      })}
    </div>
  )
}

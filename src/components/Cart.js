import React, {useContext} from 'react'
import cartContext from '../store/Cart-context'
import CartItems from './CartItems';
import classes from './CartItems.module.css'

export default function Cart() {

const cartCtx = useContext(cartContext);


  const cartItems =  cartCtx.cartItems.map(item => {
        console.log("items")
        return (
            <CartItems key = {item.id} id={item.id} name={item.name} price={item.price} quantity={item.quantity}/>
        )
    })

    return (
        <section>
            {cartItems}
            <div className={classes.totalAmount}>Total Amount: {cartCtx.totalAmount}</div>
        </section>
    )
    
}

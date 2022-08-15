import React, {useContext} from "react";
import classes from './CartItems.module.css'
import cartContext from "../store/Cart-context";

export default function CartItems(props) {

const cartCtx = useContext(cartContext)

    const removeItemHandler = () => {
        cartCtx.removeItem({id: props.id, quantity: props.quantity})
    }

  return ( <>
  
    <div className={classes.container}> 
        <img src={require(`../images/${props.name}.jpg`)} alt={props.name}  className = {classes.image}/>
        <div className={classes.words}>
            <div>{props.name} <span className={classes.quantity}>x{props.quantity}</span></div>
            <div>${props.price}</div>
        </div>
        <div className={classes.closecontainer}>
            <div className={classes.totalprice}>${props.quantity * props.price}</div>
            <button className={classes.remove} onClick = {removeItemHandler}><span className={classes.x}>X</span></button>
        </div> 
    </div>
    </>
  );
}

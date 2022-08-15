import React, {useContext} from 'react'
import cartContext from '../store/Cart-context'

export default function StoreItem(props) {

    const cartCtx = useContext(cartContext);

const addToCartHandler = () => {

    const cartItem = {
        name: props.name,
        id: props.id,
        quantity: 1,
        price: props.price,
    }

    cartCtx.addItem(cartItem);

}



  return (
        <div className="card mx-5" style={{ width: "19em" }}>
        <img src={require(`../images/${props.name}.jpg`)} alt={props.name} />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5 className="card-title">{props.name}</h5>
            <div>${props.price}</div>
          </div>
          <button className="btn btn-primary" onClick = {addToCartHandler}>+ Add to Cart</button>
        </div>
      </div>
   
  )
}

import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cartContext from '../store/Cart-context'


export default function MainHeader() {

const cartCtx = useContext(cartContext);

const toggleCartHandler = () => {
    console.log('clicked')
    cartCtx.showCartHandler();
}

  return (
    <nav className="navbar navbar-expand-lg bg-light  ">
    <div className="container-fluid">
      <div className="collapse navbar-collapse ms-5" id="navbarTogglerDemo02">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to = "/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to = "/store" >Store</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to = "/about" >About</Link>
          </li>
        </ul>
      </div>
        <Link className="btn btn-primary" to ="/cart" onClick = {toggleCartHandler}>Cart <sup>{cartCtx.count}</sup></Link>
    </div>
  </nav>
  )
}

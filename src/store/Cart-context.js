import { createContext, useState } from "react";

let cartArray = [{}]

const cartContext = createContext({
    cart: cartArray,
    addItem() {},
    removeItem() {}
});


export const CartContextProvider = ({children}) => {

const [showCart, setShowCart] = useState(false);
const [count, setCount] = useState(0);
const [cartItems, setCartItems] = useState([]);

//const cartItems = [];

const addItemToCart = (item) => {

    const exisitingItem = cartItems.find(cartItem => item.id === cartItem.id);

    console.log(exisitingItem)

    if (exisitingItem) {
         setCartItems(cartItems.map(x => x.id === item.id ? {...exisitingItem, quantity: exisitingItem.quantity + 1} : x))
    }
    else {
        setCartItems(prev => [...prev, item])
    }
    

    setCount((prev) => prev + 1)
}

const removeItemFromCart = (cartItem) => {
    setCartItems(cartItems.filter(item => cartItem.id !== item.id))
    setCount((prev) => prev - cartItem.quantity)
}

const showCartHandler = () => {
    setShowCart(!showCart);

}

let totalAmount = 0;

cartItems.forEach((item) => {
    totalAmount += item.quantity * item.price;
})

const contextValue = {
    cartItems,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
    count,
    showCartHandler,
    showCart,
    totalAmount
}

    return <cartContext.Provider value = {contextValue}>
        {children}
    </cartContext.Provider>
}


export default cartContext;
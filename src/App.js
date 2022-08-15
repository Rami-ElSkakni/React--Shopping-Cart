import MainHeader from "./components/MainHeader";
import { Route } from "react-router-dom";
import Store from "./Routes/Store";
import Home from "./Routes/Home";
import About from "./Routes/About";
import {CartContextProvider} from './store/Cart-context'
import Cart from "./components/Cart";

function App() {

  return (
    <CartContextProvider>
      <MainHeader />
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/store">
        <Store></Store>
      </Route>
      <Route path="/about">
        <About></About>
      </Route>
      <Route path="/cart">
        <Cart></Cart>
      </Route>
    </CartContextProvider>
  );
}

export default App;

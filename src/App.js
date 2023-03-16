import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import Cart from "./Cart/Cart";
import { useState } from "react";

function App() {

  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler =() => {
    setCartIsShown(true);
  }

  const closeCartHandler = () =>{
    setCartIsShown(false);
  }

  return (
    <>
      {cartIsShown && <Cart onCloseCart={closeCartHandler}/> }
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;

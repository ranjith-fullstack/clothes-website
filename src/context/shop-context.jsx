import { createContext,  useState } from "react";
import Mentshirts from "../men";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i <Mentshirts.length + 2; i++) {
    cart[i] = 0;
  }
  return cart;
};



export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [whishlist, setwhishlist] = useState(getDefaultCart());
  const [detailedpage, setdetailedpage] = useState([]);
  const [shippingAddress, setShippingAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Click Me');
  const [promoCode, setPromoCode] = useState('');


  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = Mentshirts.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const detailedpageadd = (data) => {
    setdetailedpage(data)
    };

  const whishlistadd = (itemId) => {
    setwhishlist((prev) => ({ ...prev,[itemId]: 1  }))
    };
    
 const whishlistremove = (itemId) => {
  setwhishlist((prev) => ({ ...prev,[itemId]: 0  }))
};
  
  

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updatequantity = (newamount,itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: newamount}));
  };

  const updateShippingAddress = (address) => {
    setShippingAddress(address);
  };

  const updatePaymentMethod = (method) => {
    setPaymentMethod(method);
  };

  const updatePromoCode = (code) => {
    setPromoCode(code);
  };

  const cartitemcount = () => {
    let cartcount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        cartcount += cartItems[item];
      }
    }
    return cartcount;
  };


  const whishlistcount = () => {
    let whishlistcount = 0;
    for (const item in whishlist) {
      if (whishlist[item] > 0) {
        whishlistcount += whishlist[item];
      }
    }
    return whishlistcount;
  };

 
  
  
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updatequantity,
    getTotalCartAmount,
    cartitemcount,
    whishlistadd,
    whishlistremove,
    whishlistcount,
    detailedpageadd,
    whishlist,
    detailedpage,
    shippingAddress,
    paymentMethod,
    promoCode,
    updateShippingAddress,
    updatePaymentMethod,
    updatePromoCode,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

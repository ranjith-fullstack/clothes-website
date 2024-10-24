import React, { useContext ,useEffect,useState} from 'react';
import './dashboardd.css';
import { ShopContext } from '../context/shop-context';
import Mentshirts from '../men';


export const Dashboardd = () => {
  const [transactionAmount, setTransactionAmount] = useState('');

  const {
    userid,
    username,
    cartItems,
    getTotalCartAmount,
    shippingAddress,
    paymentMethod,
    promoCode,

  } = useContext(ShopContext);

  useEffect(() => {
    const fetchTotalAmount = async () => {
      try {
        // Fetch the updated total amount from the context
        const updatedTotal = getTotalCartAmount();
        
        // Check if the cart has items before adding shipping cost
        const updatedGrandTotal = updatedTotal > 0 ? updatedTotal + 30 : 0;
  
        // Update the transaction amount in the state
        setTransactionAmount(updatedGrandTotal);
      } catch (error) {
        console.error("Error fetching total amount:", error);
      }
    };
  
    // Call the fetchTotalAmount function when the component mounts
    fetchTotalAmount();
  }, [getTotalCartAmount]);
  

  return (
    <div>
      <div className="vamseee">
        <div className="dashboard-container mt-5">
          <h2 className="mt-5">Order List</h2>
          <table>
            <thead>
              <tr>
                <th>User Id</th>
                <th>User Name</th>
                <th>Cart Items</th>
                <th>Total Cart Amount</th>
                <th>Shipping Address</th>
                <th>Payment Method</th>
                <th>Promo Code</th>
              </tr>
            </thead>

            



            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td>{Mentshirts.map((product) => {
            if (cartItems[product.id] !== 0) {
              return (
                <div key={product.id}>
                  <div>
                    <div>
                      <div className="cartitembox cartitemboxx m-2">
                        <div className="d-flex flex-row pt-3">
                        <h1>{product.caption}</h1>
                          <img src={product.menimage} alt="img" className="cartimg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            
          })}</td>
                <td>{transactionAmount}</td>
                <td>{shippingAddress}</td>
                <td>{paymentMethod}</td>
                <td>{promoCode}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

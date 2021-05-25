import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from "react-router-dom";
import { getCartTotal } from "../../Context/reducer";
import { useStateValue } from "../../Context/StateProvider";
import { db } from "../../Firebase/firebase";
import CheckoutProduct from "../CheckOutProduct/CheckoutProduct";
import "./payment.css";

const Payment = () => {
  const [state, dispatch] = useStateValue();
  const { cart, user } = state;

  // stripe-js
  const stripe = useStripe();
  const elements = useElements();

  const history = useHistory()

  // state
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("")
  const [clientSecret, setClientSecret] = useState(true)
  


  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
        const response = await axios({
            method: 'post',
            // Stripe expects the total in a currencies subunits
            url: `/payments/create?total=${getCartTotal(cart) * 100}`
        });
        setClientSecret(response.data.clientSecret)
    }

    getClientSecret();
}, [cart])

  console.log("the secret is >>", clientSecret)
  console.log("user >>>", user)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setProcessing(true)

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
    }
    }).then(({paymentIntent}) => {

      db.collection("users")
      .doc(user?.uid)
      .collection("orders")
      .doc(paymentIntent.id)
      .set({
        cart: cart,
        amount: paymentIntent.amount,
        created: paymentIntent.created
      })

      setSucceeded(true);
      setError(null)
      setProcessing(false)

      dispatch({
        type: "EMPTY_CART"
      })

      history.replace("/orders")
    })
  }

  const handleChange = (e) => {
    // listen for changes in th cartElement
    // display any errors as the customer types their card details
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "")
  }

  return (
    <div className="payment">
      <div className="payment__container">
          <h1>
             <Link to="/checkout">Back Checkout {cart?.length <= 1 ? cart.length + " item" : cart.length + " items"}</Link>
          </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 Görükle Dumlupınar</p>
            <p>Bursa Nilüfer - Turkey</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
              {cart.map((item,i) => (
                  <CheckoutProduct
                    key={i}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}/>
              ))}
          </div>
        </div>
        <div className="payment__section">
            <div className="payment__title">
                <h3>Payment Method</h3>
            </div>
            <div className="payment__details">
                <form onSubmit={handleSubmit}>
                  <CardElement onChange={handleChange}/>
                  <div className="payment__priceContainer">
                    <CurrencyFormat
                      renderText={(value) => (
                        <>
                          <h3>Order Total: {value}</h3>
                        </>
                      )}
                      decimalScale={2}
                      value={getCartTotal(cart)}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}/>
                      <button disabled={processing || disabled || succeeded}>
                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                      </button>
                  </div>
                  {error && <div>{error}</div>}
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

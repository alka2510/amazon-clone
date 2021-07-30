import { Link } from "@material-ui/core";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState, useEffect } from "react";
import CheckoutProduct from "./CheckoutProduct";
import { getBasketTotal } from "./reducer";
import CurrencyFormat from "react-currency-format";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import axios from "./axios";
import { useHistory } from "react-router-dom";
import { db } from "./firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);

  const history = useHistory();
  useEffect(() => {
    const getClientSecret = async () => {
      try {
        const response = await axios({
          method: "post",
          url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
        });
        console.log(response);
        setClientSecret(response.data.clientSecret);
      } catch (err) {
        console.log(err);
      }
    };

    getClientSecret();
  }, [basket]);

  console.log("the secret is ..", clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        console.log(paymentIntent.id);
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });
        history.replace("/orders");
      })
      .catch((err) => err.message);
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (<Link to="/checkout">{basket.length} items</Link>)
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Dehradun, India</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <div key={item.id}>
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment method</h3>
          </div>
          <div className="payment_details">
            {/* stipes implementation */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="checkout_priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy now"}</span>
                </button>
              </div>
            </form>
            {error && <div>{error}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  // state changes
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(null);

  // 2 hooks
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = (e) => {
    // do stripe stuff
  };

  const handleChange = (event) => {
    // listen for changes in the card element and display any errors as the customer types their card details

    // if the event is empty then disable the button
    setDisabled(event.empty);
    // if there is an error then show the error or else shoe nothing
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>24 Privet Drive</p>
            <p>Mumbai, India</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                price={item.price}
                image={item.image}
                rating={item.rating}
                title={item.title}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe Functionality */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__prizeContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <p>
                        {" "}
                        Subtotal ({basket.length} items):{" "}
                        <strong>{value}</strong>{" "}
                      </p>

                      <small className="subtotal__gift">
                        <input type="checkbox" /> This order contains a gift
                      </small>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

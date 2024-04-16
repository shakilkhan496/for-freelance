import { useState, useRef, useEffect } from "react";
import {
  PayPalHostedFieldsProvider,
  PayPalHostedField,
  PayPalButtons,
  usePayPalHostedFields,
} from "@paypal/react-paypal-js";
import Metamask from "../metamask"
import "./PaymentForm.css";

export const PaymentForm = () => {
  const [cart, setCart] = useState([]);
  const [discountedPrice, setDiscountedPrice] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const promo = localStorage.getItem("promo");
  const [isChecked, setIsChecked] = useState(true);


  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  // Récupérer le panier depuis le local storage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Calculer le prix total de tous les articles dans le panier
  useEffect(() => {
    const newTotalPrice = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const roundedTotalPrice =
      Math.round(newTotalPrice * 100 + Number.EPSILON) / 100;
    setTotalPrice(roundedTotalPrice.toFixed(2));
  }, [cart]);

  // Calculer le prix total avec la réduction
  useEffect(() => {
    if (promo) {
      const discountedPrice = totalPrice - totalPrice * (promo * 0.01);
      const roundedDiscountedPrice =
        Math.round(discountedPrice * 100 + Number.EPSILON) / 100;
      setDiscountedPrice(roundedDiscountedPrice.toFixed(2));
    }
  }, [totalPrice, promo]);

  async function createOrderCallback() {
    try {
      const response = await fetch("https://backend-jokair.vercel.app/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // use the "body" param to optionally pass additional order information
        // like product ids and quantities
        body: JSON.stringify({
          cart: [
            {
              id: "YOUR_PRODUCT_ID",
              quantity: "YOUR_PRODUCT_QUANTITY",
              cost: totalPrice,
            },
          ],
        }),
      });

      const orderData = await response.json();

      if (orderData.id) {
        return orderData.id;
      } else {
        const errorDetail = orderData?.details?.[0];
        const errorMessage = errorDetail
          ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
          : JSON.stringify(orderData);

        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error(error);
      return `Could not initiate PayPal Checkout...${error}`;
    }
  }

  async function onApproveCallback(data, actions) {
    try {
      const response = await fetch(
        `https://backend-jokair.vercel.app/api/orders/${data.orderID}/capture`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const orderData = await response.json();
      // Three cases to handle:
      //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
      //   (2) Other non-recoverable errors -> Show a failure message
      //   (3) Successful transaction -> Show confirmation or thank you message

      const transaction =
        orderData?.purchase_units?.[0]?.payments?.captures?.[0] ||
        orderData?.purchase_units?.[0]?.payments?.authorizations?.[0];
      const errorDetail = orderData?.details?.[0];

      // this actions.restart() behavior only applies to the Buttons component
      if (
        errorDetail?.issue === "INSTRUMENT_DECLINED" &&
        !data.card &&
        actions
      ) {
        // (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
        // recoverable state, per https://developer.paypal.com/docs/checkout/standard/customize/handle-funding-failures/
        return actions.restart();
      } else if (
        errorDetail ||
        !transaction ||
        transaction.status === "DECLINED"
      ) {
        // (2) Other non-recoverable errors -> Show a failure message
        let errorMessage;
        if (transaction) {
          errorMessage = `Transaction ${transaction.status}: ${transaction.id}`;
        } else if (errorDetail) {
          errorMessage = `${errorDetail.description} (${orderData.debug_id})`;
        } else {
          errorMessage = JSON.stringify(orderData);
        }

        throw new Error(errorMessage);
      } else {
        // (3) Successful transaction -> Show confirmation or thank you message
        // Or go to another URL:  actions.redirect('thank_you.html');

        console.log(
          "Capture result",
          orderData,
          JSON.stringify(orderData, null, 2)
        );
        return `Transaction ${transaction.status}: ${transaction.id}. See console for all available details`;
      }
    } catch (error) {
      return `Sorry, your transaction could not be processed...${error}`;
    }
  }

  const SubmitPayment = ({ onHandleMessage }) => {
    // Here declare the variable containing the hostedField instance
    const { cardFields } = usePayPalHostedFields();
    const cardHolderName = useRef(null);

    const submitHandler = () => {
      if (typeof cardFields.submit !== "function") return; // validate that \`submit()\` exists before using it
      //if (errorMsg) showErrorMsg(false);
      cardFields
        .submit({
          // The full name as shown in the card and billing addresss
          // These fields are optional for Sandbox but mandatory for production integration
          cardholderName: cardHolderName?.current?.value,
        })
        .then(async (data) => onHandleMessage(await onApproveCallback(data)))
        .catch((orderData) => {
          onHandleMessage(
            `Sorry, your transaction could not be processed...${JSON.stringify(
              orderData
            )}`
          );
        });
    };

    return (
      <button onClick={submitHandler} className="btn-paypal">
        Pay
      </button>
    );
  };

  const Message = ({ content }) => {
    return <p>{content}</p>;
  };
  const [message, setMessage] = useState("");
  // const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
  // const totalPrice = savedCart.reduce((acc, item) => {
  //   const itemTotal = item.price * item.quantity;
  //   return acc + itemTotal;
  // }, 0);

  return (
    <div className="pay-paypal">
      <Metamask />
      <PayPalButtons
        style={{
          shape: "pill",
          label: "pay",
          size: "responsive",
          color: "silver",
        }}
        createOrder={createOrderCallback}
        onApprove={async (data, actions) =>
          setMessage(await onApproveCallback(data, actions))
        }
        className="PayPalButtons"
      />

      <div className="line-paypal">
        <div className="line-paypal-1"></div>
        <div className="line-paypal-2">
          <p>OU</p>
        </div>
        <div className="line-paypal-3"></div>
      </div>

      <PayPalHostedFieldsProvider createOrder={createOrderCallback}>
        <div>
          <div className="container-input-paypal-card-number">
            <PayPalHostedField
              id="card-number"
              hostedFieldType="number"
              options={{
                selector: "#card-number",
                placeholder: "Numéro de la carte",
              }}
              className="input-paypal"
            />
          </div>
          <div className="container-paypal">
            <PayPalHostedField
              id="expiration-date"
              hostedFieldType="expirationDate"
              options={{
                selector: "#expiration-date",
                placeholder: "Date d'expiration",
              }}
              className="input-paypal"
            />
            <PayPalHostedField
              id="cvv"
              hostedFieldType="cvv"
              options={{
                selector: "#cvv",
                placeholder: "Code de sécurité",
              }}
              className="input-paypal"
            />
          </div>
          <div className="container-paypal">
            <input
              id="card-holder"
              type="text"
              placeholder="Nom sur la carte"
              className="input-paypal-name-on-card"
            />
          </div>
          <div className="container-checkbox-paypal">
            <input type="checkbox" id="cbtest" checked={isChecked} onChange={toggleCheckbox} />
            <label for="cbtest" className="check-box"/>
            <p>Utiliser l'adresse d'expédition comme adresse de facturation</p>
          </div>
          {isChecked ? null : (
            <div className="adresse-de-facturation">
              <h3>Adresse de facturation</h3>
              <input type="text" name="" id="" placeholder="Prénom" />
              <input type="text" name="" id="" placeholder="Nom" />
              <input type="text" name="" id="" placeholder="Entreprise (optionnel)" />
              <input type="text" name="" id="" placeholder="Adresse" />
              <input type="text" name="" id="" placeholder="Code postal" />
              <input type="text" name="" id="" placeholder="Ville" />
              <input type="text" name="" id="" placeholder="Téléphone (optionnel)" />
            </div>
          )}
          <div className="from_7">
            <div className="input_from_7">
              <p>Récapitulatif</p>
            </div>
          </div>
          <SubmitPayment
            onHandleMessage={setMessage}
            className="paypal-button"
          />
        </div>
      </PayPalHostedFieldsProvider>
      <Message content={message} />
    </div>
  );
};
